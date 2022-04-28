//SIDEBAR

const menuItems = document.querySelectorAll('.menu-item'); 


//MESSAGES
const messagesNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

//THEME
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes  = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');
const backgroundColor = document.querySelectorAll('.choose-bg div');
var bodyBackground = document.querySelector('#body');
//var body = document.getElementsByTagName("BODY")[0]


//Remove active class from menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    });
}


menuItems.forEach(item => {
    item.addEventListener('click', ()=> {
        changeActiveItem(); 
        item.classList.add('active');
        if (item.id != 'notifications') {
            document.querySelector('.notification-popup').style.display='none';
            item.classList.remove('notification-count');
        } else {
            document.querySelector('.notification-popup').style.display='block';
            document.querySelector('.notification-count').style.display='none';
        }
        
    });
});


// ======================= MESSAGES ========================
// searches chat
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(user => {
        let name = user.querySelectorAll('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1) {
            user.style.display = 'flex';
        } else {
            user.style.display = 'none';
        }
    });

}

// search chat
messageSearch.addEventListener('keyup', searchMessage);

// Highlight message card when clicked
messageSearch.addEventListener('click', ()=> {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 1000);
})

messagesNotification.addEventListener('click', ()=> {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display='none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);

});

//THEME AND DISPLAY CUSTOMIZATION

//opens modal
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')) {
        themeModal.style.display = 'none';
    }
};
//close modal 
themeModal.addEventListener('click', closeThemeModal);

theme.addEventListener('click', openThemeModal);



//========================font size===========================

// remove active class from spans for font sizes
const removeActiveSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
    
}

fontSizes.forEach(size => {

    size.addEventListener('click', () => {
        removeActiveSelector();
        let fontSize;

        size.classList.toggle('active');

        if(size.classList.contains('font-size-1')) {
            fontSize = '10px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '5.4rem'); 
        } else if (size.classList.contains('font-size-2')) {
            fontSize ='13px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '-7rem');
        } else if (size.classList.contains('font-size-3')) {
            fontSize ='16px';
            root.style.setProperty('----sticky-top-left', '-2rem');
            root.style.setProperty('----sticky-top-right', '-17rem');
        } else if (size.classList.contains('font-size-4')) {
            fontSize ='19px';
            root.style.setProperty('----sticky-top-left', '-5rem');
            root.style.setProperty('----sticky-top-right', '-25');
        } else if (size.classList.contains('font-size-5')) {
            fontSize ='22px';
            root.style.setProperty('----sticky-top-left', '-12rem');
            root.style.setProperty('----sticky-top-right', '-35rem');
        } 

        // change font size of root html

        document.querySelector('html').style.fontSize = fontSize;
    });
});



// Change Primary colors

// Remove active class from colors
const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}

colorPalette.forEach(color => {
    
    color.addEventListener('click', () => {
        changeActiveColorClass();
        let primary;
        color.classList.toggle('active')
        
        if(color.classList.contains('color-1')) {
            primaryHue = 252;
        } else if(color.classList.contains('color-2')) {
            primaryHue = 52;
        } else if(color.classList.contains('color-3')) {
            primaryHue = 352;
        } else if(color.classList.contains('color-4')) {
            primaryHue = 152;
        } else if(color.classList.contains('color-5')) {
            primaryHue = 202;
        }

        root.style.setProperty('--primary-color-hue', primaryHue);
         
    });
});


// Change Background



backgroundColor.forEach(background => {
    
    let lightColorLightness;
        let whiteColorLightness;
        let darkColorLightness;
        //change background color
        const changeBg = () => {
            root.style.setProperty('--light-color-lightness', lightColorLightness);
            root.style.setProperty('--white-color-lightness', whiteColorLightness);
            root.style.setProperty('--dark-color-lightness', darkColorLightness);
        }
        // Remove active class from colors
const changeBgColorClass = () => {
    backgroundColor.forEach(bg => {
        bg.classList.remove('active');
    })
}

    background.addEventListener('click', () => {
        changeBgColorClass();
        background.classList.toggle('active')
        
        if(background.classList.contains('bg-1')) {
            darkColorLightness = '17%';
            whiteColorLightness = '95%';
            lightColorLightness = '100%';
            window.location.reload();
        } else if (background.classList.contains('bg-2')) {
            darkColorLightness = '95%';
            whiteColorLightness = '20%';
            lightColorLightness = '15%';
        } else if (background.classList.contains('bg-3')) {
            darkColorLightness = '95%';
            whiteColorLightness = '10%';
            lightColorLightness = '0%';
        }
        changeBg();
    });
});
