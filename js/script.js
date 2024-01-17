const tabs = document.querySelectorAll('.tabs-bangun-datar ul li button')
const layoutBangunDatar = document.querySelector('.layout-bangun-datar')
const resultBox = document.querySelector('.result')
const btnReset = document.querySelector('.btn-reset')

tabs.forEach((tab) => {
    tab.onclick = () => {
        if(tab.className == ''){
            for(let i = 0; i < tabs.length; i++ ){
                if(tabs[i].className === 'active-tab'){
                    tabs[i].classList.remove('active-tab')
                }
            }
            tab.classList.add('active-tab')
            layoutBangunDatar.innerHTML = bangunDatarKeliling()
        }
        if (tab.value == 'luas'){
            layoutBangunDatar.innerHTML = `
            <div class="info-bangun-datar">
                <img src="https://o-cdn-cas.sirclocdn.com/parenting/images/Persegi_finirezyhome.wordpress.co.width-500.format-webp.webp" alt="Gambar Bangun Datar" width="150" style="border-radius: 10px;">
                <div class="info">
                    <p>Rumus Luas Persegi yaitu:</p>
                    <b>L = S x S</b>
                    <br><br>
                    <p>L = Luas</p>
                    <p>S = Sisi</p>
                </div>
            </div>
            <div class="input-bangun-datar">
                <div class="input-header">
                    <input type="number" name="luas" id="input-luas" placeholder="Masukan angka" onkeydown="enter(event)">
                </div>
                <button class="btn-hitung btn-luas" value="luas">Hitung!</button>
            </div>
            `
        }
    }
})

const bangunDatarKeliling = () => {
    return `
    <div class="info-bangun-datar">
    <img src="https://o-cdn-cas.sirclocdn.com/parenting/images/Persegi_finirezyhome.wordpress.co.width-500.format-webp.webp" alt="Gambar Bangun Datar" width="150" style="border-radius: 10px;">
    <div class="info">
        <p>Rumus Keliling Persegi yaitu:</p>
        <b>K = 4 x S</b>
        <br><br>
        <p>L = Luas</p>
        <p>S = Sisi</p>
    </div>
    </div>
    <div class="input-bangun-datar">
        <div class="input-header">
            <input type="number" name="luas" id="input-keliling" placeholder="Masukan angka" onkeydown="enter(event)">
        </div>
        <button class="btn-hitung btn-kel" value="keliling">Hitung!</button>
    </div>
    `
}


setInterval(() => {
    const btnLuas = document.querySelector('.btn-luas')
    const inputLuas = document.querySelector('#input-luas')
    btnLuas.onclick = () => {
        const hasilLuas = inputLuas.value * inputLuas.value
        console.log(hasilLuas);
        if(inputLuas.value == 0){
            alert('Silahkan masukan angka terlebih dahulu')
        } else {
            const say = `Untuk mencari Luas Persegi, pertama-tama kita ketahui dulu nih Rumus Luas Persegi nya yaitu: L = S x S. [L = Luas] dan [S = Sisi]. Selanjutnya kita hitung Luas Persegi dari angka yang kamu masukan tadi. Jadi, hasil Luas Persegi adalah L = ${inputLuas.value} x ${inputLuas.value} = ${hasilLuas}.`
            let i = 0
            const typing = setInterval(() => {
                if(i === 0){
                    resultBox.innerHTML = ''
                }
                resultBox.innerHTML += say.charAt(i)
                i++
                btnReset.onclick = () => {
                    clearInterval(typing)
                    inputLuas.value = ''
                    resultBox.innerHTML = 'Result will appear here...'
                }
            },50)
        }
    }
    btnReset.onclick = () => {
        clearInterval(typing)
        inputLuas.value = ''
        resultBox.innerHTML = 'Result will appear here...'
    }
}, 500)

setInterval(() => {
    const btnKeliling = document.querySelector('.btn-kel')
    const inputKeliling = document.querySelector('#input-keliling')
    btnKeliling.onclick = () => {
        const hasilKeliling = 4 * inputKeliling.value
        console.log(hasilKeliling);
        if(inputKeliling.value == 0){
            alert('Silahkan masukan angka terlebih dahulu')
        } else {
            const say = `Untuk mencari Keliling Persegi, pertama kita cari tahu dulu Rumus Keliling persegi nya, yaitu: K = 4 x S. [K = Keliling] dan [S = Sisi]. Setelahnya kita mulai menghitung Keliling Persegi dari angka yang kamu masukan. Jadi hasil Keliling Persegi adalah K = 4 x ${inputKeliling.value} = ${hasilKeliling}.`
            let i = 0
            const typing = setInterval(() => {
                if(i === 0){
                    resultBox.innerHTML = ''
                }
                resultBox.innerHTML += say.charAt(i)
                i++
                btnReset.onclick = () => {
                    clearInterval(typing)
                    inputKeliling.value = ''
                    resultBox.innerHTML = 'Result will appear here...'
                }
            },50)
        }
    }
    btnReset.onclick = () => {
        clearInterval(typing)
        inputKeliling.value = ''
        resultBox.innerHTML = 'Result will appear here...'
    }
}, 500)






