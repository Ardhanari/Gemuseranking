function showEnglish(){

    document.getElementById("content-eng").style.display = 'block';
    document.getElementById("content-de").style.display = 'none';

    document.getElementById("switch-eng").style.color = '#990a07';
    document.getElementById("switch-de").style.color = '#878787';

}

function showGerman(){

    document.getElementById("content-eng").style.display = 'none';
    document.getElementById("content-de").style.display = 'block';

    document.getElementById("switch-eng").style.color = '#878787';
    document.getElementById("switch-de").style.color = '#990a07';
}