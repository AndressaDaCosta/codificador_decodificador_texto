
var input1 = document.querySelector('textarea#txt-area1');
var input2 = document.querySelector('textarea#txt-area2');
var message = document.getElementById("msg")

var button1 = document.querySelector('button.btn-1');
button1.onclick = encrypt;

var button2 = document.querySelector('button.btn-2');
button2.onclick = decrypt;

document.getElementById('none').innerHTML = '';
input1.focus();

// Função criptografar//
function encrypt() {
    
    if (input1.value.length == 0) {
        document.getElementById('none').innerHTML = '<h2 id="none">Nenhuma mensagem encontrada</h2>';
        input1.focus();
    } else {
        //limpa textarea2 (descriptografar)//
        document.getElementById('none').innerHTML = '';
        document.querySelector('img.icone').style.display = 'none';

        //chaves pra criptografar 
        var text = input1.value;
        var txt =  text.replace(/e/igm, 'enter');
        var txt = txt.replace(/i/igm, 'imes');
        var txt = txt.replace(/a/igm, 'ai');
        var txt = txt.replace(/o/igm, 'ober');
        var txt = txt.replace(/u/igm, 'ufat');

        document.getElementById('txt-area2').innerHTML = `${txt}`;
       
        // Botão copiar é exibido na tela quando é chamado a função criptograr() 
        document.getElementById('copy').innerHTML = '<button class="button btn-3" onclick="copy()">Copiar</button>';
       
    }
}
// função descriptografar o texto inserido pelo usuário se o valor nao for vazio, se for mostra msg
function decrypt() {
    if (input1.value.length == 0) {
        document.getElementById('none').innerHTML = ' <h2 id="none">Nenhuma mensagem encontrada</h2>';
        document.querySelector('img.icone').style.display;
        input1.focus();
    } else {
        //limpa a txt-area2 quando o botão é clicado pra poder exibir o resultado
        document.getElementById('none').innerHTML = '';
        document.querySelector('img.icone').style.display = 'none';
        document.getElementById('txt-area1').innerHTML = '';

        //chaves pra criptografar 
        var text = input1.value;
        var txt =  text.replace(/enter/igm, 'e');
        txt = txt.replace(/imes/igm, 'i');
        txt = txt.replace(/ai/igm, 'a');
        txt = txt.replace(/ober/igm, 'o');
        txt = txt.replace(/ufat/igm, 'u');
        // txt = txt.replace(/[áãàâªäåæ]/,"a");
        // txt = txt.replace(/[éêèęėēë]/,"e");
        // txt = txt.replace(/[íîìïi]/,"i");
        // txt = txt.replace(/ç/,"c");

        document.getElementById('txt-area2').innerHTML = `${txt}`;
     
        // Botão de copiar é exibido na tela quando a função "criptografar()" é chamada 
        document.getElementById('copy').innerHTML = '<button class="button btn-3" onclick="copy()">Copiar</button>';
    }
}

function copy() {
    document.querySelector('#txt-area2').select();
    document.execCommand('copy');
    // document.execCommand('cut');
    message.innerHTML = "O texto copiado já está na área de transferência!";
    document.querySelector("#txt-area1").value = "";
    // input1.focus();
    // input2.value = "";
}




