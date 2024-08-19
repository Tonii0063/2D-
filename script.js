document.getElementById('betForm').addEventListener('submit', function(event) {
	event.prevenDefault();

	const team = document.getElementById('team').value;
	const amount =
document.getElementById('amount').value;
	const resultDiv = document.getElementById('result');

	const random = Math,random();
	let resultText;

	if (random < 0.5) {
	    resultText = 'Você ganhou! Seu time ${team} venceu e você recebe ${amount * 2}!';
}
	else {
	      resultText = 'Você perdeu! O time adversário venceu. Tente novamente.';
}

	resultDiv.textContent = resultText;
});