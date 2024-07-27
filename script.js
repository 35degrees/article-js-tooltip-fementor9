document.addEventListener('DOMContentLoaded', function () {
	const flexButton = document.querySelector('.flex-share')
	const flexPerson = document.querySelector('.flex-person')
	const flexFooter = document.querySelector('.flex-footer')
	const flexFooterMobile = document.querySelector('.flex-footer-mobile')
	const tooltip = document.querySelector('.tooltip')
	const flexMobileOverlayButton = document.querySelector(
		'.flex-share-mobile-overlay'
	)
	const flexShareMobile = document.querySelector('.flex-share-mobile')
	const footerMobileOverlay = document.querySelector('.footer-mobile-overlay')

	flexButton.addEventListener('click', function () {
		if (tooltip.style.display === 'none') {
			tooltip.style.display = 'block'
		} else {
			tooltip.style.display = 'none'
		}
	})
	flexShareMobile.addEventListener('click', function () {
		if (footerMobileOverlay.style.display === 'none') {
			footerMobileOverlay.style.display = 'flex'
			flexFooterMobile.style.display = 'none'
		}
		console.log('good')
	})
})

// flexButton.addEventListener('mouseover', function () {
// 	flexButton.style.setProperty('background', 'var(--dark-grey-blue)')
// })
