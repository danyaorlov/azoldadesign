window.onload = function(){
 $("#phone").mask("8 (999)-999-9999");

 let Twoniger,Twopac,dama,damaniger,decl,niger,renderer,rendererForm,scene,sceneForm,camera,cameraForm,light,texture,texture2,texture3,texture4,texture5,texture6,
     textureFormBox,textureFormBox2,textureFormBox3,PaintBoxGeometry, PaintBox,PaintBox2,PaintBox3,PaintBoxGeometry2,PaintBoxGeometry3;
 let width = window.innerWidth;
 let height = window.innerHeight;
 let mouseX = 0;
 let mouseY = 0;
 const spheres = [];
 const planes = [];

 $(window).scroll(function(){
  let scrollTop = window.innerHeight;
  if($(window).scrollTop() >= scrollTop){
   $('.background-education').css({
    top : '0'
   });
  }

  if($(window).scrollTop() < scrollTop){
   $('.background-education').css({
    top: $(window).scrollTop() - height
   });

  }
 });

 $(window).resize(function () {
     width = window.innerWidth;
     height = window.innerHeight;

     if(width > 1700){
         scene.position.x = 0;
         scene.position.z = 0;
     }
     if (width < 1700 && width > 1200){
         scene.position.x = -150;
         scene.position.z = -350;
         sceneForm.set(0,0,3000);
     }else if(width < 1200 && width > 1000){
         scene.position.x = -350;
         scene.position.z = -200;
     }else if(width < 1000 && width > 768){
         scene.position.x = 0;
         scene.position.z = 0;
     }else if(width <= 768){
         scene.position.x = 150;
         scene.position.z = -700;
     }
     $(".text-main").removeAttr("style");
     $('.request-wait-block').css({
       width:$('.formbox').width(),
       height:$('.formbox').height(),
  });
     init();
 });

 $( "body" ).mousemove(function( event ) {
  let mouseX = ( event.clientX - width/2 ) / 100;
  let mouseY = ( event.clientY - height/2 ) / 100;
  if(width > 1700){
      $(".text-it").css({top: 110 + mouseY, left: 165 + mouseX*1.2});
      $(".text-my").css({top: 200 + mouseY, right: 350 + mouseX*2});
      $(".text-works").css({bottom: 80 + mouseY*2, left: 350 + mouseX});
  }
  if (width < 1700 && width > 1400){
      $(".text-it").css({top: 150 + mouseY, left: 55 + mouseX*1.2});
      $(".text-my").css({top: 174 + mouseY, right: 115 + mouseX*2});
      $(".text-works").css({bottom: 80 + mouseY*2, left: 350 + mouseX});
  }else if(width < 1400 && width > 1200){
      $(".text-it").css({top: 150 + mouseY, left: 55 + mouseX*1.2});
      $(".text-my").css({top: 174 + mouseY, right: 115 + mouseX*2});
      $(".text-works").css({bottom: 81 + mouseY*2, left: 226 + mouseX});
  }else if(width < 1200 && width > 1000){
      $(".text-it").css({top: 268 + mouseY, left: 61 + mouseX*1.2});
      $(".text-my").css({top: 271 + mouseY, right: 46 + mouseX*2});
      $(".text-works").css({bottom: 81 + mouseY*2, left: 226 + mouseX});
  }else if(width < 1000 && width > 768 ){
      $(".text-it").css({top: 161 + mouseY, left: 50 + mouseX*1.2});
      $(".text-my").css({top: 140 + mouseY, right: 60 + mouseX*2});
      $(".text-works").css({bottom: 127 + mouseY*2, left: 200 + mouseX});
  }else if(width < 768){
      $(".text-it").css({top: 130 + mouseY, left: 15 + mouseX*1.2});
      $(".text-my").css({top: 130 + mouseY, right: 13 + mouseX*2});
      $(".text-works").css({bottom: 110 + mouseY*2, left: 36 + mouseX});
  }

  $(".siria-back").css({top: mouseY,left: mouseX*1.2 });
  $(".bob-back").css({top: mouseX,left: mouseY*1.2 });
 });



 $( ".imageScroll" ).hover(function() {

  if(width > 768){
   $(this).find('.main-show-image').css({
    transform: 'scale(1.34)'
   });

   if( $(this).hasClass('block-siria')){
    $('.text-desc-block:nth-child(2)').addClass("hover-td");
   }else if($(this).hasClass('block-bobMarley')){
    $('.text-desc-block:nth-child(3)').addClass("hover-td");

   }
  }




 }, function () {
  $(".main-show-image").css({
   transform: 'scale(1)',
  });
  $('.text-desc-block').removeClass("hover-td");


 });



 init();


 function init(){
  const width = window.innerWidth;
  const height = window.innerHeight;
  const canvas = document.getElementById('canvas');


  canvas.setAttribute('width',width);
  canvas.setAttribute('height',height);

  renderer = new THREE.WebGLRenderer({canvas: canvas});
  renderer.setClearColor(0x000000);

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(45 , width / height, 0.1, 5000);
  camera.position.set(0,0,1000);


  light = new THREE.AmbientLight(0xffffff);
  scene.add(light);

  const geometryTwoNiger = new THREE.PlaneBufferGeometry( 552, 722, 10,10 );
  const geometryDama = new THREE.PlaneBufferGeometry( 570, 427.5, 10,10 );
  const geometryTwoPac = new THREE.PlaneBufferGeometry( 324, 396, 10,10 );
  const geometryDecl = new THREE.PlaneBufferGeometry( 268, 358, 10,10 );
  const geometryNiger = new THREE.PlaneBufferGeometry( 282, 414, 10,10 );
  const geometryDamaNiger = new THREE.PlaneBufferGeometry( 367.2, 543.6, 10,10 );


  texture = new THREE.TextureLoader().load( 'images/2nigers.png' );
  texture2 = new THREE.TextureLoader().load( 'images/dama.png' );
  texture3 = new THREE.TextureLoader().load( 'images/2pac.png' );
  texture4 = new THREE.TextureLoader().load( 'images/decl.png' );
  texture5 = new THREE.TextureLoader().load( 'images/niger.png' );
  texture6 = new THREE.TextureLoader().load( 'images/damaniger.png' );





  // 2 НИГЕРА СВЕРХУ
  let  material = new THREE.MeshBasicMaterial({map: texture});
  Twoniger = new THREE.Mesh(geometryTwoNiger,material);
  scene.add(Twoniger);
  Twoniger.rotation.x = 0.2;
  Twoniger.rotation.y = 0;
  Twoniger.position.x = -350;
  Twoniger.position.y = 350;
  Twoniger.position.z = -1000;



  //ДАМА ПОСЕРЕДИНЕ РЯДОМ С 2-мя НИГЕРАМИ

  material = new THREE.MeshBasicMaterial({map: texture2});
  dama = new THREE.Mesh(geometryDama,material);
  scene.add(dama);
  dama.rotation.x = -0.15;
  dama.rotation.y = -0.18;
  dama.position.x = 200;
  dama.position.y = 250;
  dama.position.z = -500;

  //ТУПАК СНИЗУ СЛЕВА

  material = new THREE.MeshBasicMaterial({map: texture3});
  Twopac = new THREE.Mesh(geometryTwoPac,material);
  scene.add(Twopac);
  Twopac.rotation.x = 0;
  Twopac.rotation.y = 0;
  Twopac.position.x = -380;
  Twopac.position.y = -130;
  Twopac.position.z = -300;

  //ДЕЦЛ СНИЗУ СЛЕВА

  material = new THREE.MeshBasicMaterial({map: texture4});
  decl = new THREE.Mesh(geometryDecl,material);
  scene.add(decl);
  decl.rotation.x = 0.1;
  decl.rotation.y = 0;
  decl.position.x = -530;
  decl.position.y = 0;
  decl.position.z = 50;

  //НИГЕР ИЗ 1+1 В СЕРЕДИНЕ

  material = new THREE.MeshBasicMaterial({map: texture5});
  niger = new THREE.Mesh(geometryNiger,material);
  scene.add(niger);
  niger.rotation.x = 0.1;
  niger.rotation.y = 0;
  niger.position.x = 70;
  niger.position.y = -150;
  niger.position.z = 0;

  //ДЕВУШКА НИГЕР СПРАВА ВНИЗУ

  material = new THREE.MeshBasicMaterial({map: texture6});
  damaniger = new THREE.Mesh(geometryDamaNiger,material);
  scene.add(damaniger);
  damaniger.rotation.x = 0.1;
  damaniger.rotation.y = 0;
  damaniger.position.x = 610;
  damaniger.position.y = -50;
  damaniger.position.z = -250;

     if(width > 1700){
         scene.position.x = 0;
         scene.position.z = 0;
     }
     if (width < 1700 && width > 1200){
         scene.position.x = -150;
         scene.position.z = -350;
     }else if(width < 1200 && width > 1000){
         scene.position.x = -350;
         scene.position.z = -200;
     }else if(width < 1000 && width > 768){
         scene.position.x = 0;
         scene.position.z = 0;
         camera.position.set(0,0,1800);
     }else if(width <= 768){
         scene.position.x = 150;
         scene.position.y = 50;
         scene.position.z = 0;
         camera.position.set(0,0,2000);
     }
     if (width <= 1000 && width > 768){
         decl.position.x = 400;
         decl.position.y = 300;

         scene.position.set(0,0,1000);
     }
     if(width <= 768){
      Twopac.position.x = -300;
      Twopac.position.y = -350;
      Twopac.position.z= 700;

      niger.position.x = 80;
      niger.position.y = -500;
      niger.position.z = 200;

      Twoniger.position.x = -350;
      Twoniger.position.y = 0;
      Twoniger.position.z = -450;

      damaniger.position.x = 300;
      damaniger.position.y = 100;
      damaniger.position.z = -150;

      dama.position.x = 30;
      dama.position.y = 700;
      dama.position.z = -200;

      decl.position.x = -500;
      decl.position.y = 300;
      decl.position.z = 600;

      scene.position.x = 150;

     }
     if (width > 768){
      for ( let i = 1; i < 15; i ++ ) {
       let geometryPlane = new THREE.PlaneBufferGeometry( 500, 700, 10,10 );
       const textPlane = new THREE.TextureLoader().load( 'images/planes/'+ i + '.jpg' );

       const materialPlane = new THREE.MeshBasicMaterial({map: textPlane});

       let  meshPlane = new THREE.Mesh(geometryPlane,materialPlane);
       const timer = 0.0001 * Date.now();

       meshPlane.position.x =  Math.cos( timer + i )*3000;
       console.log(5 * Math.cos( timer + i )*150);
       meshPlane.position.y = Math.cos( timer + i ) /Math.abs(Math.cos( timer + i )) * (1000 + 130*Math.abs(Math.cos( timer + i*1.1 ))) ;
       meshPlane.position.z = Math.random() * 1000 - 800;

       scene.add(meshPlane);

       planes.push(meshPlane);
      }
     }

  renderer.render(scene , camera);

  window.addEventListener( 'resize', onWindowResize, false );
 }
 animate();
 function onWindowResize() {
     camera.aspect = window.innerWidth / window.innerHeight;
     camera.updateProjectionMatrix();

     renderer.setSize( window.innerWidth, window.innerHeight );
 }

 function animate() {

  requestAnimationFrame( animate );
    let timer = 0.0001 * Date.now();
   camera.position.x +=  ( Math.cos( timer +1) )*0.5  ;
   camera.position.y +=  ( Math.sin(timer + 1)) ;
   camera.lookAt(light.position);
   renderer.render( scene, camera );

   for (let i = 0, il = planes.length; i < il; i++){
    const plane = planes[i];

    plane.position.x = 5 * Math.cos( timer + i )*250;
    plane.position.y = 5 * Math.sin( timer + i * 1.1 )*150;
  }
 }


 function animateCamera(){
  requestAnimationFrame(animateCamera);
  const timer = 0.0001 * Date.now();
  if(width <= 768){
   cameraForm.position.x +=  ( Math.cos( timer +1) )*0.5  ;
   cameraForm.position.y +=  ( Math.sin(timer + 1)) ;
  }else if(width > 768){
   cameraForm.position.x += ( mouseX/4 - cameraForm.position.x ) *0.05;
   cameraForm.position.y += ( - mouseY/4 - cameraForm.position.y ) *0.05;

  }

  cameraForm.lookAt( sceneForm.position );
  for ( let i = 0, il = spheres.length; i < il; i ++ ) {

   const sphere = spheres[ i ];

   sphere.position.x = 5 * Math.cos( timer + i )*50;
   sphere.position.y = 5 * Math.sin( timer + i * 1.1 )*50;

  }

  rendererForm.render(sceneForm,cameraForm);

 }

 function initOnForm(){
  let widthCanvas = $(".canvas-field").width();
  let heightCanvas = $(".canvas-field").height();
  console.log(widthCanvas);
  const canvas = document.getElementById('form-canvas');
  let zIndexCamera = 450;
  sceneForm = new THREE.Scene();

  if(width <= 1200){
   heightCanvas = window.innerHeight;
   widthCanvas = window.innerWidth;
   zIndexCamera = 400;
  }
  canvas.setAttribute('width', widthCanvas);
  canvas.setAttribute('height', heightCanvas);

  rendererForm = new THREE.WebGLRenderer({canvas: canvas});
  rendererForm.setClearColor(0x000000);



  cameraForm = new THREE.PerspectiveCamera(45 , widthCanvas / heightCanvas, 0.1, 5000);
  cameraForm.position.set(0,0,zIndexCamera);


  light = new THREE.AmbientLight(0xffffff);
  sceneForm.add(light);

  PaintBoxGeometry = new THREE.BoxBufferGeometry( 150,150,150);
  PaintBoxGeometry2 = new THREE.BoxBufferGeometry( 250,150,150);
  PaintBoxGeometry3 = new THREE.BoxBufferGeometry( 200,200,200);


  let videoTwoPac = document.getElementById( 'video' );
  videoTwoPac.preload = 'auto';
  videoTwoPac.autoplay = 'true';
  videoTwoPac.src = "video/twopac.MOV";
  videoTwoPac.play();
  videoTwoPac.addEventListener( 'play', function () {
   this.currentTime = 1;
  }, false );

  let videoNiger = document.getElementById( 'videoNiger' );
  videoNiger.preload = 'auto';
  videoNiger.autoplay = 'true';
  videoNiger.src = "video/niger.MOV";
  videoNiger.play();
  videoNiger.addEventListener( 'play', function () {
   this.currentTime = 1;
  }, false );

  let womanNiger = document.getElementById( 'womanNiger' );
  womanNiger.preload = 'auto';
  womanNiger.autoplay = 'true';
  womanNiger.src = "video/womanNiger.MOV";
  womanNiger.play();
  womanNiger.addEventListener( 'play', function () {
   this.currentTime = 1;
  }, false );

  let camel = document.getElementById( 'camel' );
  camel.preload = 'auto';
  camel.autoplay = 'true';
  camel.src = "video/camel.MP4";
  camel.play();
  camel.addEventListener( 'play', function () {
   this.currentTime = 1;
  }, false );

  let pustinya = document.getElementById( 'pustinya' );
  pustinya.preload = 'auto';
  pustinya.autoplay = 'true';
  pustinya.src = "video/pustinya.MOV";
  pustinya.play();
  pustinya.addEventListener( 'play', function () {
   this.currentTime = 1;
  }, false );

  let textureTwoPac = new THREE.VideoTexture( videoTwoPac );
  textureTwoPac.minFilter = THREE.NearestFilter;
  textureTwoPac.magFilter = THREE.LinearFilter;
  textureTwoPac.format = THREE.RGBFormat;

  let textureNiger = new THREE.VideoTexture(videoNiger);
  textureNiger.magFilter = THREE.LinearFilter;
  textureNiger.minFilter = THREE.NearestFilter;
  textureNiger.format = THREE.RGBFormat;

  let textureWomanNiger = new THREE.VideoTexture(womanNiger);
  textureWomanNiger.minFilter = THREE.NearestFilter;
  textureWomanNiger.magFilter = THREE.LinearFilter;
  textureWomanNiger.format - THREE.RGBFormat;

  let textureCamel = new THREE.VideoTexture(camel);
  textureCamel.minFilter = THREE.NearestFilter;
  textureCamel.magFilter = THREE.LinearFilter;
  textureCamel.format - THREE.RGBFormat;

  let texturePustinya = new THREE.VideoTexture(pustinya);
  texturePustinya.minFilter = THREE.NearestFilter;
  texturePustinya.magFilter = THREE.LinearFilter;
  texturePustinya.format - THREE.RGBFormat;



  const parametersTwoPac = { color: 0xffffff, map: textureTwoPac };
  const parametersNiger = {color: 0xffffff, map:textureNiger};
  const parametersWomanNiger = {color:0xffffff, map:textureWomanNiger};
  const parametersCamel = {color:0xffffff, map:textureCamel};
  const parametersPustinya = {color:0xffffff, map:texturePustinya};

  textureFormBox =  [
   new THREE.MeshLambertMaterial(parametersNiger),
   new THREE.MeshBasicMaterial(parametersWomanNiger),
   new THREE.MeshLambertMaterial(parametersNiger),
   new THREE.MeshBasicMaterial(parametersNiger),
   new THREE.MeshBasicMaterial(parametersTwoPac),
   new THREE.MeshBasicMaterial(parametersNiger),

  ];
  textureFormBox2 = [
   new THREE.MeshLambertMaterial(parametersWomanNiger),
   new THREE.MeshBasicMaterial(parametersTwoPac),
   new THREE.MeshLambertMaterial(parametersWomanNiger),
   new THREE.MeshBasicMaterial(parametersNiger),
   new THREE.MeshBasicMaterial(parametersCamel),
   new THREE.MeshBasicMaterial(parametersNiger),
  ];
  textureFormBox3 = [
   new THREE.MeshLambertMaterial(parametersNiger),
   new THREE.MeshBasicMaterial(parametersNiger),
   new THREE.MeshLambertMaterial(parametersWomanNiger),
   new THREE.MeshBasicMaterial(parametersNiger),
   new THREE.MeshBasicMaterial(parametersPustinya),
   new THREE.MeshBasicMaterial(parametersNiger),
  ];





  PaintBox = new THREE.Mesh(PaintBoxGeometry, textureFormBox);
  PaintBox.position.x = 150;
  PaintBox.position.y = -75;
  PaintBox2 = new THREE.Mesh(PaintBoxGeometry2,textureFormBox2);
  PaintBox2.position.x = -50;
  PaintBox2.position.y= 75;
  PaintBox3 = new THREE.Mesh(PaintBoxGeometry3, textureFormBox3);
  PaintBox3.position.z = -175;
  PaintBox3.position.x = -25;
  PaintBox3.position.y = -100;

  const geometry = new THREE.SphereBufferGeometry( 7, 32, 16 );




  for ( let i = 0; i < 25; i ++ ) {
   let random = Math.random();
   let material;
   if(random > 0 && random < 0.2){
    material = new THREE.MeshBasicMaterial( { color: 0xffffff, map: textureWomanNiger } );
   }else if(random > 0.2 && random < 0.4){
    material = new THREE.MeshBasicMaterial( { color: 0xffffff, map: textureNiger } );
   }else if(random > 0.4 && random < 0.6){
    material = new THREE.MeshBasicMaterial( { color: 0xffffff, map: textureTwoPac } );
   }else if(random > 0.6 && random < 0.8){
    material = new THREE.MeshBasicMaterial( { color: 0xffffff, map: textureCamel } );
   }else if(random > 0.8 && random < 1){
    material = new THREE.MeshBasicMaterial( { color: 0xffffff, map: texturePustinya } );
   }
   const mesh = new THREE.Mesh( geometry, material );

   mesh.position.x = Math.random() * 700 - 350;
   mesh.position.y = Math.random() * 700 - 350;
   mesh.position.z = Math.random() * 700 - 350;

   mesh.scale.x = mesh.scale.y = mesh.scale.z = Math.random() * 3 + 1;

   sceneForm.add( mesh );

   spheres.push( mesh );

  }

  sceneForm.add(PaintBox,PaintBox2,PaintBox3,cameraForm);
  document.addEventListener( 'mousemove', onDocumentMouseMove, false  );

  rendererForm.render(sceneForm, cameraForm);
  animateCamera();

  window.addEventListener( 'resize', onWindowResizeForm, false );

 }

 function onWindowResizeForm() {

   if(width < 1200){
    cameraForm.aspect = window.innerWidth / window.innerHeight;
    cameraForm.updateProjectionMatrix();
    rendererForm.setSize( window.innerWidth, window.innerHeight);
   }else{
    cameraForm.aspect = (window.innerWidth/2) / window.innerHeight;
    cameraForm.updateProjectionMatrix();
    rendererForm.setSize( window.innerWidth/2, window.innerHeight);
   }



 }
 function onDocumentMouseMove( event ) {
  let windowHalfX = window.innerWidth ;
  let windowHalfY = window.innerHeight ;
  mouseX = ( event.clientX - windowHalfX );
  mouseY = ( event.clientY - windowHalfY );
 }
    let renderCheck = 0;
 $(".hunter").click(function () {



   $(".sidebar-form").removeClass('hidden').animate({left:0   },250 , "swing", function () {

       $("body").css({
        overflow: "hidden"
       });
       $('.request-wait-block').css({
        width:$('.formbox').width(),
        height:$('.formbox').height(),
       });

       $(this).removeClass('hidden');
       if(renderCheck == 0){
           renderCheck++;
           initOnForm();
       }
   });


 });

 $(".crossOnButton").click(function () {
  let slideBarWidth = $('.sidebar-form').width();
  $("body").css({
   'overflow-y': "scroll"
  });
  $(".sidebar-form").animate({ left: slideBarWidth   },250 , "swing",function () {
   $(this).addClass('hidden');
  } );
 });

 $('.buttonForm').click(function () {

 });

}
