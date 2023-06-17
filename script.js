function toggleMode(){
   const html = document.documentElement

   if(html.classList.contains('light')){
    html.classList.remove('light')
   } else {
    html.classList.add('light')
   }
   //ou pode usar esse outro codigo mais simples ainda
   // html.classlist.toogle('light')


   // pegar a tag img

   // se tiver a light mode, adicionar a imagem light
   // subistutuir a imagem
}
