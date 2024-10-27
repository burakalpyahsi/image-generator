const imageContainerEl = document.querySelector(".image-container");
const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", () => {
    const imageNum = 10; 
    addNewImages(imageNum);
});

function addNewImages(imageNum) {
    imageContainerEl.innerHTML = '';
    for (let index = 0; index < imageNum; index++) { 
        const newImgEl = document.createElement("img");
        newImgEl.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`;
        imageContainerEl.appendChild(newImgEl);

        // Yeni resim yüklenince "show" sınıfını ekle
        setTimeout(() => {
            newImgEl.classList.add("show");
        }, 10); // Zamanlayıcıyı kısa tutarak animasyon etkisi oluşturuyoruz
    }
}

 