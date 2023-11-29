const header = document.querySelector("header");

header.innerHTML = `
<div class="d-flex header3__pc-wrap container-inner">
    <h1 class="header-title">
        <a href="" class="font-30 sebang">miro</a>
    </h1>
    <nav class="nav-style-3">
        <ul class="main-list" role="tree">
            <li>
                <button class="main-list__menu" role="treeitem" aria-controls="nav-menu01" id="nav-menu01_1" aria-expanded="false">서비스소개</button>
                <ul class="sub-list" role="menu" id="nav-menu01" aria-labelledby="nav-menu01_1" aria-hidden="true">
                    <li><a href="" class="sub-list__menu" role="menuitem">SUB 1</a></li>
                    <li><a href="" class="sub-list__menu" role="menuitem">SUB 2</a></li>
                    <li><a href="" class="sub-list__menu" role="menuitem">SUB 3</a></li>
                </ul>
            </li>
            <li>
                <button class="main-list__menu" role="treeitem" aria-controls="nav-menu02" id="nav-menu02_1" aria-expanded="false">베스트상품</button>
                <ul class="sub-list" role="menu" id="nav-menu02" aria-labelledby="nav-menu02_1" aria-hidden="true">
                    <li><a href="" class="sub-list__menu" role="menuitem">SUB 1</a></li>
                    <li><a href="" class="sub-list__menu" role="menuitem">SUB 2</a></li>
                    <li><a href="" class="sub-list__menu" role="menuitem">SUB 3</a></li>
                    <li><a href="" class="sub-list__menu" role="menuitem">SUB 4</a></li>
                    <li><a href="" class="sub-list__menu" role="menuitem">SUB 5</a></li>
                </ul>
            </li>
            <li>
                <button class="main-list__menu" role="treeitem" aria-controls="nav-menu03" id="nav-menu03_1" aria-expanded="false">상담설계</button>
                <ul class="sub-list" role="menu" id="nav-menu03" aria-labelledby="nav-menu03_1" aria-hidden="true">
                    <li><a href="" class="sub-list__menu" role="menuitem">SUB 1</a></li>
                    <li><a href="" class="sub-list__menu" role="menuitem">SUB 2</a></li>
                    <li><a href="" class="sub-list__menu" role="menuitem">SUB 3</a></li>
                </ul>
            </li>
        </ul>
        <div class="gnb-bg"></div>
    </nav>
    <div class="pc-wrap__right" role="group">
        <p class="quick-qna">빠른상담 1588-4477</p>
        <a href="" class="qna-link">
            <strong>상담신청 하기</strong>
        </a>
        <button type="button" class="mo-nav-btn" aria-controls="nav3-btn01" id="nav3-btn01_1" aria-expanded="false">
            <span class="blind">전체메뉴</span>
            <span class="mo-nav-btn__line"></span>
            <span class="mo-nav-btn__line"></span>
            <span class="mo-nav-btn__line"></span>
        </button>
    </div>
</div>
<div class="mo-nav-wrap-3" id="nav3-btn01" aria-labelledby="nav3-btn01_1" aria-hidden="true">
    <div class="mo-nav-wrap__mo-nav-box">
        <ul class="mo-main-list" role="tree">
            <li>
                <button class="mo-main-list__menu" role="treeitem" aria-controls="nav-mo-menu01" id="nav-mo-menu01_1" aria-expanded="false">서비스소개
                    <span><i class="xi-arrow-right"></i></span>
                </button>
                <ul class="sub-list" role="menu" id="nav-mo-menu01" aria-labelledby="nav-mo-menu01_1" aria-hidden="true">
                    <li><a href="" class="sub-list__menu" role="menuitem" tabindex="-1">SUB 1</a></li>
                    <li><a href="" class="sub-list__menu" role="menuitem" tabindex="-1">SUB 2</a></li>
                    <li><a href="" class="sub-list__menu" role="menuitem" tabindex="-1">SUB 3</a></li>
                </ul>
            </li>
            <li>
                <button class="mo-main-list__menu" role="treeitem" aria-controls="nav-mo-menu02" id="nav-mo-menu02_1" aria-expanded="false">베스트상품
                    <span><i class="xi-arrow-right"></i></span>
                </button>
                <ul class="sub-list" role="menu" id="nav-mo-menu02" aria-labelledby="nav-mo-menu02_1" aria-hidden="true">
                    <li><a href="" class="sub-list__menu" role="menuitem" tabindex="-1">SUB 1</a></li>
                    <li><a href="" class="sub-list__menu" role="menuitem" tabindex="-1">SUB 2</a></li>
                    <li><a href="" class="sub-list__menu" role="menuitem" tabindex="-1">SUB 3</a></li>
                    <li><a href="" class="sub-list__menu" role="menuitem" tabindex="-1">SUB 4</a></li>
                    <li><a href="" class="sub-list__menu" role="menuitem" tabindex="-1">SUB 5</a></li>
                </ul>
            </li>
            <li>
                <button class="mo-main-list__menu" role="treeitem" aria-controls="nav-mo-menu03" id="nav-mo-menu03_1" aria-expanded="false">상담설계
                    <span><i class="xi-arrow-right"></i></span>
                </button>
                <ul class="sub-list" role="menu" id="nav-mo-menu03" aria-labelledby="nav-mo-menu03_1" aria-hidden="true">
                    <li><a href="" class="sub-list__menu" role="menuitem" tabindex="-1">SUB 1</a></li>
                    <li><a href="" class="sub-list__menu" role="menuitem" tabindex="-1">SUB 2</a></li>
                    <li><a href="" class="sub-list__menu" role="menuitem" tabindex="-1">SUB 3</a></li>
                </ul>
            </li>
        </ul>
        <div class="mo-nav-wrap__footer" role="group">
            <a href="" class="sns">
                <i class="xi-kakaotalk xi-3x"></i>
                <span class="blind">카카오톡</span>
            </a>
            <a href="" class="sns">
                <i class="xi-instagram xi-3x"></i>
                <span class="blind">인스타그램</span>
            </a>
        </div>
    </div>
</div>
`;
