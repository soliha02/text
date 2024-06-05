let ism = prompt("Bu promptga ism kiriting")
let harf = prompt("Bu promptga harf kiriting")


if (ism.includes(harf)) {
alert(`${ism} ismda ${harf} harf bor`)
}else{
    alert(`${ism} ismda ${harf} harf yoq`)
}
