<template>
   <div class="hello">
      <h5>pageCart test text</h5>
   </div>
 </template>
 
 <script>
 export default {
   name: 'pageCart',
   props: {
     msg: String
   }
 }
 </script>
 
 <style scoped lang="scss">
 .hello {
   font-size: 30px;
   margin: 40px 0 0;
 }
 ul {
   list-style-type: none;
   padding: 0;
 }
 li {
   display: inline-block;
   margin: 0 10px;
 }
 a {
   color: #42b983;
 }
 </style>