const tabs = document.querySelectorAll('.tabs-bangun-datar ul li button')

tabs.forEach((tab) => {
    tab.onclick = () => {
        if(tab.className == ''){
            for(let i = 0; i < tabs.length; i++ ){
                if(tabs[i].className === 'active-tab'){
                    tabs[i].classList.remove('active-tab')
                }
            }
            tab.classList.add('active-tab')
        }  
        console.log(tab.className);
    }
})




