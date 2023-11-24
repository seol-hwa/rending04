//nav_3
//mobile
const nav3_btn=document.querySelector('.header3__pc-wrap .mo-nav-btn');
const nav3_moWrap=document.querySelector('.mo-nav-wrap-3');
const nav3_subList=document.querySelectorAll('.mo-nav-wrap-3 .sub-list');
//pc
const nav3Tree=document.querySelector('.nav-style-3');
const nav3Style=document.querySelector('.mo-nav-wrap-3');
const nav3Logo=document.querySelector('.header3__pc-wrap h1 a');
const nav3MainMenu=nav3Tree.querySelectorAll('.main-list__menu');
const nav3SubList=nav3Tree.querySelectorAll('.sub-list');
const nav3Right=document.querySelectorAll('.pc-wrap__right a');

//mobile
nav3_btn.addEventListener('click',function(){
    if(!this.classList.contains('active')){
        document.querySelector('body').style.overflowY='hidden';
        this.setAttribute('aria-expanded',true);
        nav3Style.setAttribute('aria-hidden',false);
        //모바일 메뉴창 열리면 pc메뉴 진입 방해용
        nav3Logo.setAttribute('tabindex',-1);
        nav3MainMenu.forEach(all=>{
            all.setAttribute('tabindex',-1);
        });
        nav3Right.forEach(all=>{
            all.setAttribute('tabindex',-1);
        })
        //
        this.classList.add('active');
        nav3_moWrap.classList.add('active');
    }else{
        document.querySelector('body').style.overflowY='initial';
        this.setAttribute('aria-expanded',false);
        nav3Style.setAttribute('aria-hidden',true);
        //모바일 메뉴창 닫히면 pc메뉴 진입 허용
        nav3Logo.setAttribute('tabindex',0);
        nav3MainMenu.forEach(all=>{
            all.setAttribute('tabindex',0);
        });
        nav3Right.forEach(all=>{
            all.setAttribute('tabindex',0);
        })
        //
        this.classList.remove('active');
        nav3_moWrap.classList.remove('active');
    }
});

nav3_subList.forEach(sub=>{
    sub.previousElementSibling.addEventListener('click',function(){
        if (!this.classList.contains('active')){
            nav3_subList.forEach(all=>{
                all.style.height=0;
                all.setAttribute('aria-hidden',true);
                all.previousElementSibling.classList.remove('active');
                all.previousElementSibling.setAttribute('aria-expanded',false);
            });
            sub.style.height=(sub.children[0].offsetHeight * sub.children.length)+'px';
            this.setAttribute('aria-expanded',true);
            sub.setAttribute('aria-hidden',false);
            this.nextElementSibling.querySelectorAll('.sub-list__menu').forEach(all=>{
                all.setAttribute('tabindex',0);
            });
            this.classList.add('active');
        }else{
            sub.style.height=0;
            this.setAttribute('aria-expanded',false);
            sub.setAttribute('aria-hidden',true);
            this.nextElementSibling.querySelectorAll('.sub-list__menu').forEach(all=>{
                all.setAttribute('tabindex',-1);
            });
            this.classList.remove('active');
        }
        
    });
});

//pc
nav3Tree.addEventListener('mouseenter',function(){
    this.querySelectorAll('.main-list__menu').forEach(all=>{
        all.setAttribute('aria-expanded',true);
    });
    this.querySelectorAll('.sub-list').forEach(all=>{
        all.setAttribute('aria-hidden',false);
    });
    this.classList.add('active');
});
nav3Tree.addEventListener('mouseleave',function(){
    this.querySelectorAll('.main-list__menu').forEach(all=>{
        all.setAttribute('aria-expanded',false);
    });
    this.querySelectorAll('.sub-list').forEach(all=>{
        all.setAttribute('aria-hidden',true);
    });
    this.classList.remove('active');
});
nav3Logo.addEventListener('focus',function(){
    nav3Tree.classList.remove('active');
    nav3MainMenu.forEach(all=>{
        all.setAttribute('aria-expanded',false);
    });
    nav3SubList.forEach(all=>{
        all.setAttribute('aria-hidden',true);
    });
});
nav3MainMenu.forEach(main=>{
    main.addEventListener('click',function(){
        nav3Tree.classList.add('active');
        nav3MainMenu.forEach(all=>{
            all.setAttribute('aria-expanded',true);
        });
        nav3SubList.forEach(all=>{
            all.setAttribute('aria-hidden',false);
        });
    });
});
nav3Right[0].addEventListener('focus',function(){
    nav3Tree.classList.remove('active');
    nav3MainMenu.forEach(all=>{
        all.setAttribute('aria-expanded',false);
    });
    nav3SubList.forEach(all=>{
        all.setAttribute('aria-hidden',true);
    });
});