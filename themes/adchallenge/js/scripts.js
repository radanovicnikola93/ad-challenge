const siteSlogan = document.querySelector('header .region-header #block-adchallenge-branding .site-slogan');
const sloganText = siteSlogan.innerText;

for (let i = 0; i < sloganText.lenght - 5; i++) {
    console.log(sloganText[i])
}