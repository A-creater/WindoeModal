let modal = document.querySelector("#modal"),
			modalOverlay = document.querySelector("#modal-overlay"),
			closeButton = document.querySelector("#close-button"),
			openButton = document.querySelector("#open-button"),
			input = document.querySelector('.input');


		document.addEventListener("keydown", (e) => {
			const key = e.key;
			if (key === "Escape") {
				modal.classList.toggle("closed");
				modalOverlay.classList.toggle("closed");
			}
		});

		openButton.addEventListener("click", () => {
			modal.classList.toggle("closed");
			modalOverlay.classList.toggle("closed");


		});


		function human() {
			let surname = document.querySelector('.input__surname').value;
			const name = document.querySelector('.input__name').value;
			const mail = document.querySelector('.input__mail').value;
			console.log(surname);

			document.getElementById('demo').innerHTML = surname;
		}

		const buttonSave = document.querySelector('.button__save');
		buttonSave.onclick = () => human();

