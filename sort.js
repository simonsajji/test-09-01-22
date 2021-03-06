var container = document.getElementById("array");

// Function to generate the array of blocks
function generatearray() {
	for (var i = 0; i < 20; i++) {

	
		var value = Math.ceil(Math.random() * 100);

		// Creating element div
		var array_ele = document.createElement("div");

		array_ele.classList.add("block");
		array_ele.style.height = "7px";

		array_ele.style.transform = `translate(${i * 30}px)`;
		var array_ele_label = document.createElement("label");
		array_ele_label.classList.add("block_id");
		array_ele_label.innerText = value;

		array_ele.appendChild(array_ele_label);
		container.appendChild(array_ele);
	}
}

function swap(el1, el2) {
	return new Promise((resolve) => {

	
		var temp = el1.style.transform;
		el1.style.transform = el2.style.transform;
		el2.style.transform = temp;
		setTimeout(() => {
				container.insertBefore(el2, el1);
				resolve();
			}, 550);
		});

}

// Asynchronous BubbleSort function
async function BubbleSort() {
	var blocks = document.querySelectorAll(".block");


	for (var i = 0; i < blocks.length; i += 1) {
		for (var j = 0; j < blocks.length - i - 1; j += 1) {
            
			blocks[j].style.backgroundColor = "#FF4949";
			blocks[j + 1].style.backgroundColor = "#FF4949";

			console.log("run");
			var value1 = Number(blocks[j].childNodes[0].innerHTML);
			var value2 = Number(blocks[j + 1]
						.childNodes[0].innerHTML);

			// To compare value of two blocks
			if (value1 > value2) {
				await swap(blocks[j], blocks[j + 1]);
				blocks = document.querySelectorAll(".block");
			}

			// Changing the color to the previous one
			blocks[j].style.backgroundColor = "#6b5b95";
			blocks[j + 1].style.backgroundColor = "#6b5b95";
		}

		//changing the color of greatest element
		//found in the above traversal
		blocks[blocks.length - i - 1].style.backgroundColor = "#13CE66";
	}
}

generatearray();

BubbleSort();
