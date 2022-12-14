let allNamesElm = document.getElementById("allNames")
	let loaderElm = document.getElementById("loader")
	let errorMessageElm = document.getElementById("errorMessage")
	
	function setErrorDisplay(){
	loaderElm.style.display = "none"
	allNamesElm.style.display = "none"
	errorMessageElm.style.display = "block"
	}

	
			
	fetch("https://sheets.googleapis.com/v4/spreadsheets/1WtwrA3Bou1MluhOmcEFiJSNBVFt5aq_1821tFXLiehI/values/index?key=AIzaSyDhlpOIwLeSZUTfp1OUPRagso6CMgbMzOA").then(res=>{
		if (res.status === 200){
			//console.log(res.json())
			res.json().then(data=>{
				const yourData = data["data"]
				for(let i = 0; i < yourData.length; i++){
				    let rowInfo = yourData[i]
				    let rowInfoDiv = document.createElement("div")
				    rowInfoDiv.classList.add("name-row")
					
				    let rowName = document.createElement("h4")
				    let rowNameNode = document.createTextNode(rowInfo["TITLE"])
				    rowName.appendChild(rowNameNode)
				    rowName.classList.add("title")

					let rowImage = document.createElement("img")
			    	let rowImageNode = document.createTextNode(rowInfo["IMAGE"])
					console.log(rowImageNode)
			    	rowImage.src = "../img/" + rowImageNode.nodeValue
					//Randomize size and position of images 
					const x = Math.random() * window.innerWidth
  					const y = Math.random() * window.innerHeight
  					rowImage.style.position = 'absolute'
  					rowImage.width = 50 + Math.random() * 300
					rowImage.style.left = x + 'px'
					rowImage.style.top = y + 'px'
					//rowImage.style.opacity = Math.random(0.1, 1)
					//rowImage.style.filter = "blur(" + Math.random(1, 15) +"px)"
			    	rowImage.classList.add("image")
					
				    let rowWritten = document.createElement("p")
				    let rowWrittenNode = document.createTextNode(rowInfo["DATE"])
				    rowWritten.appendChild(rowWrittenNode)
				    rowWritten.classList.add("date")
	
				    let rowAudio = document.createElement("p")
				    let rowAudioNode = document.createTextNode(rowInfo["CREDITS (EN)"])
				    rowAudio.appendChild(rowAudioNode)
				    rowAudio.classList.add("credits")
					
				    rowInfoDiv.appendChild(rowName)
					rowInfoDiv.appendChild(rowImage)
				    rowInfoDiv.appendChild(rowWritten)
				    rowInfoDiv.appendChild(rowAudio)
					
				    allNamesElm.appendChild(rowInfoDiv)
				}
				
				loaderElm.style.display = "none"
				allNamesElm.style.display = "block"
				errorMessageElm.style.display = "none"

			}).catch(err => {
				setErrorDisplay()
			})
		}
		else{
			setErrorDisplay()
			}
		}).catch(err =>{
			setErrorDisplay()
		})