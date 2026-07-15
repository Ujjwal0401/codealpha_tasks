// calculator logic with real-time evaluation and keyboard support
(() => {
  const expressionEl = document.getElementById('expression');
  const resultEl = document.getElementById('result');
  const buttons = document.querySelectorAll('.btn');

  let expression = ''; // internal storage using JS operators: + - * / ( )
  let lastResult = null;

  // Insert value into expression string
  function insert(char) {
    // Disallow multiple dots in a single number segment
    if (char === '.') {
      // find last number segment
      const parts = expression.split(/[\+\-\*\/\(\)]/);
      const last = parts[parts.length - 1];
      if (last.includes('.')) return;
    }
    // Prevent starting with operator except minus or '('
    if (expression === '' && /^[\+\*\/]$/.test(char)) return;
    expression += char;
    updateDisplay();
    computeRealtime();
  }

  function del() {
    expression = expression.slice(0, -1);
    updateDisplay();
    computeRealtime();
  }

  function clearAll() {
    expression = '';
    lastResult = null;
    updateDisplay();
    resultEl.textContent = '0';
  }

  // Replace × ÷ with * / for computation, keep parentheses allowed
  function sanitizeForEval(expr) {
    // Replace unicode operators if any
    const mapped = expr.replace(/×/g, '*').replace(/÷/g, '/').replace(/−/g, '-');
    // Allow only digits, operators, parentheses, decimal, spaces
    const allowed = /^[0-9+\-*/().\s%]*$/;
    if (!allowed.test(mapped)) throw new Error('Invalid characters');
    return mapped;
  }

  function evaluateExpression(expr) {
    if (expr.trim() === '') return null;
    try {
      const sanitized = sanitizeForEval(expr);
      // Safely evaluate: use Function rather than eval to be slightly cleaner
      // We still validate allowed chars above.
      // eslint-disable-next-line no-new-func
      const value = Function('"use strict"; return (' + sanitized + ')')();
      if (typeof value === 'number' && isFinite(value)) {
        return value;
      }
      return null;
    } catch (e) {
      return null;
    }
  }

  function computeRealtime() {
    const value = evaluateExpression(expression);
    if (value === null) {
      resultEl.textContent = '';
    } else {
      // Format with up to 12 significant digits to avoid weird floats
      resultEl.textContent = formatNumber(value);
      lastResult = value;
    }
  }

  function formatNumber(n) {
    // show integer without decimals else show up to 10 decimal places trimmed
    if (Number.isInteger(n)) return String(n);
    return Number.parseFloat(n.toFixed(10)).toString();
  }

  function updateDisplay() {
    expressionEl.textContent = expression || '';
    if (!expression) {
      resultEl.textContent = '0';
    }
  }

  function computeFinal() {
    const value = evaluateExpression(expression);
    if (value === null) {
      // If evaluation fails, do nothing or indicate error
      resultEl.textContent = 'Error';
      return;
    }
    resultEl.textContent = formatNumber(value);
    expression = String(value);
  }

  // wire up buttons
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const action = btn.dataset.action;
      const val = btn.dataset.value;
      if (action === 'clear') {
        clearAll();
        return;
      }
      if (action === 'del') {
        del();
        return;
      }
      if (action === 'equals') {
        computeFinal();
        return;
      }
      if (val) insert(val);
    });
  });

  // keyboard support
  window.addEventListener('keydown', (e) => {
    // Ignore when using IME or special input states
    if (e.isComposing) return;

    const key = e.key;

    // map common keys
    if ((/^[0-9]$/).test(key)) {
      insert(key);
      e.preventDefault();
      return;
    }
    if (key === '.' ) {
      insert('.');
      e.preventDefault();
      return;
    }
    if (key === '+' || key === '-' || key === '*' || key === '/') {
      insert(key);
      e.preventDefault();
      return;
    }
    if (key === 'Enter' || key === '=') {
      computeFinal();
      e.preventDefault();
      return;
    }
    if (key === 'Backspace') {
      del();
      e.preventDefault();
      return;
    }
    if (key === 'Escape') {
      clearAll();
      e.preventDefault();
      return;
    }
    if (key === '(' || key === ')') {
      insert(key);
      e.preventDefault();
      return;
    }
    // support Unicode × and ÷ from some keyboards
    if (key === '×') {
      insert('*');
      e.preventDefault();
      return;
    }
    if (key === '÷') {
      insert('/');
      e.preventDefault();
      return;
    }
  });

  // Initialize display
  updateDisplay();
})();
