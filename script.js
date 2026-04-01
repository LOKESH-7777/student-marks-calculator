function calculateResult() {
  const name = document.getElementById('studentName').value || 'Student';
  const math = parseFloat(document.getElementById('math').value) || 0;
  const science = parseFloat(document.getElementById('science').value) || 0;
  const english = parseFloat(document.getElementById('english').value) || 0;
  const cs = parseFloat(document.getElementById('cs').value) || 0;
  const se = parseFloat(document.getElementById('se').value) || 0;

  const total = math + science + english + cs + se;
  const average = total / 5;

  let grade;
  if (average >= 90) grade = 'O (Outstanding)';
  else if (average >= 75) grade = 'A+ (Excellent)';
  else if (average >= 60) grade = 'A (Good)';
  else if (average >= 50) grade = 'B (Average)';
  else grade = 'F (Fail)';

  const passed = average >= 50;
  const resultDiv = document.getElementById('result');
  resultDiv.style.display = 'block';
  resultDiv.className = 'result ' + (passed ? 'pass' : 'fail');
  resultDiv.innerHTML = `
    <h2>${name}</h2>
    <p>Total: ${total}/500 | Average: ${average.toFixed(1)}%</p>
    <p>Grade: <strong>${grade}</strong></p>
    <p>${passed ? '✓ PASS' : '✗ FAIL'}</p>
  `;
}