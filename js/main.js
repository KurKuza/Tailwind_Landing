// Dark module
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
const themeBtn = document.querySelector('#theme')

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
	document.documentElement.classList.add('dark')
	themeBtn.innerHTML = 'dark'
} else {
	document.documentElement.classList.remove('dark')
	themeBtn.innerHTML = 'light' 
}

themeBtn.addEventListener('click', () => {
	document.querySelector('html').classList.toggle('dark')
	
	if(document.querySelector('html').classList.contains('dark')){
		localStorage.theme = 'dark'
		themeBtn.innerHTML = 'dark'
	}	else {
		localStorage.theme = 'light'
		themeBtn.innerHTML = 'light' 
	}
})

function burgerMenu() {
	const menu = document.querySelector('#menu')
	const burger = document.querySelector('.burger')

	burger.addEventListener('click', () => {
		burger.classList.toggle('active')
		menu.classList.toggle('opacity-0')
		menu.classList.toggle('invisible')
		menu.classList.toggle('visible')
		menu.classList.toggle('opacity-1')
	})
}
burgerMenu()
