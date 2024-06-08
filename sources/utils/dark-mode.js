const darkmode=() => {
    const themeToggelbtn=document.querySelectorAll('#theme-toggle');
    
    themeToggelbtn.forEach(btn => {
        btn.addEventListener('click',() => {
            document.body.classList.toggle('light-mode');
            if(document.body.classList.contains('light-mode'))
                {
                    localStorage.setItem('theme','ligh-mode');
                }
                else{
                    localStorage.removeItem('theme');
                }
            
        });
    });

};
export default darkmode;