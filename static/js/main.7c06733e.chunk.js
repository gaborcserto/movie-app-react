(this["webpackJsonpmovie-app-react"]=this["webpackJsonpmovie-app-react"]||[]).push([[0],{108:function(e,t,a){e.exports=a(263)},262:function(e,t,a){},263:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(22),c=a.n(r),s=a(8),i=a(7),m=a(9),o=a(266),_=a(271),u=a(267),d=a(30),p=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)("movie"),m=Object(i.a)(s,2),p=m[0],E=m[1];return l.a.createElement(o.a,{className:"SearchBar"},l.a.createElement(_.a,{onChange:function(e){E(e.target.value)},className:"SearchBar__select",as:"select",value:p},l.a.createElement("option",{value:"movie"},"Movie"),l.a.createElement("option",{value:"tv"},"Series"),l.a.createElement("option",{value:"person"},"Person")),l.a.createElement(_.a,{placeholder:"Search...",className:"SearchBar__input",value:r,onChange:function(e){c(e.target.value)}}),l.a.createElement(u.a,{onClick:function(t){t.preventDefault(),e.search(r,p)},className:"SearchBar__button",variant:"danger"},l.a.createElement(d.c,null)))},E=a(270),g=a(272),h=a(101),v=Object(m.h)((function(e){var t="",a=!1;/movie_details/.test(document.URL)&&(t=" details",a=!0),/person_details/.test(document.URL)&&(t=" details",a=!0),/series_details/.test(document.URL)&&(t=" details",a=!0);return l.a.createElement("header",{className:"header".concat(t)},l.a.createElement(E.a,{className:"header__navBar",sticky:"top",expand:"md",bg:"transparent",variant:"dark"},l.a.createElement(s.c,{className:"navbar-brand",variant:"danger",exact:!0,to:"/"},l.a.createElement("span",{className:"navbar-brand__logo"},l.a.createElement(h.a,null)),e.title),l.a.createElement(E.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(E.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(g.a,{defaultActiveKey:"/",activeKey:"active",className:"mr-auto"},l.a.createElement(s.c,{activeClassName:"active",className:"nav-link",exact:!0,to:"/"},"Home"),l.a.createElement(s.c,{activeClassName:"active",className:"nav-link",exact:!0,to:"/now_playing"},"Now Playing Movies"),l.a.createElement(s.c,{activeClassName:"active",className:"nav-link",exact:!0,to:"/popular"},"Popular Movies"),l.a.createElement(s.c,{activeClassName:"active",className:"nav-link",to:"/upcoming"},"Upcoming Movies")),a?l.a.createElement(u.a,{variant:"danger",className:"btnBack ripple",onClick:function(){window.history.back()}},"\u2770\u2770 Back "):null)),a?null:l.a.createElement(p,{className:"header__search",search:e.search}))})),b=function(){return l.a.createElement("div",{className:"loading"},l.a.createElement("div",{className:"loading__inner"},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null)))};var f=Object(m.h)((function(e){var t=e.history;return Object(n.useEffect)((function(){var e=t.listen((function(){window.scrollTo(0,0)}));return function(){e()}}),[t]),null})),y=a(268),N=a(269),k=a(274),w=a(47),D=a(105),j=function(e){var t=e.title,a=Object(w.generateCustomPlaceholderURL)(e.width,e.height,{textColor:"#ffffff",text:e.text});return e.alt&&(t=e.alt),null!==e.src?l.a.createElement(D.Img,{className:e.styled,src:"https://image.tmdb.org/t/p/".concat(e.type).concat(e.src),placeholderSrc:"https://image.tmdb.org/t/p/w200".concat(e.src),alt:t,title:e.title}):l.a.createElement("img",{className:e.styled,src:a,alt:t,title:e.title})},O=a(17),S=a.n(O),T=function(e){var t=e.movieTitle,a="/movie_details/".concat(e.movieID),n=e.releaseDate;return e.seriesTitle&&(t=e.seriesTitle,a="/series_details/".concat(e.movieID),n=e.fisrtAirDate),l.a.createElement(k.a.Item,{className:"mainContent__list__item"},l.a.createElement(s.b,{to:a},l.a.createElement("div",{className:"mainContent__list__item__image"},l.a.createElement(j,{src:e.img,width:100,height:100,type:"w200",title:t,text:"Img"})),l.a.createElement("div",{className:"mainContent__list__item__title"},t,l.a.createElement("span",{className:"mainContent__list__item__title__date"},S()(n).format("YYYY")))))},x=function(e){var t,a=e.data,n=e.styled,r=e.number,c=void 0===r?0:r;return t=a?c>0?a.slice(0,c).map((function(e,t){return l.a.createElement(T,{key:t,img:e.poster_path,movieID:e.id,movieTitle:e.title,releaseDate:e.release_date,fisrtAirDate:e.first_air_date,seriesTitle:e.original_name})})):a.map((function(e,t){return l.a.createElement(T,{key:t,img:e.poster_path,movieID:e.id,movieTitle:e.title,releaseDate:e.release_date,fisrtAirDate:e.first_air_date,seriesTitle:e.original_name})})):l.a.createElement(b,null),l.a.createElement(k.a,{variant:"flush",className:n},t)},C=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(y.a,null,l.a.createElement(N.a,{sm:12,md:6},l.a.createElement("h2",{className:"mainContent__title"},"Upcoming Movies"),e.upcomingMoviesData?l.a.createElement(x,{styled:"mainContent__list",number:e.number,data:e.upcomingMoviesData.results}):l.a.createElement(b,null)),l.a.createElement(N.a,{sm:12,md:6},l.a.createElement("h2",{className:"mainContent__title"},"Now Playing Movies"),e.nowPlayingMoviesData?l.a.createElement(x,{styled:"mainContent__list",number:e.number,data:e.nowPlayingMoviesData.results}):l.a.createElement(b,null))),l.a.createElement(y.a,null,l.a.createElement(N.a,{sm:12,md:6},l.a.createElement("h2",{className:"mainContent__title"},"Popular Series"),e.popularSeriesData?l.a.createElement(x,{styled:"mainContent__list",number:e.number,data:e.popularSeriesData.results}):l.a.createElement(b,null)),l.a.createElement(N.a,{sm:12,md:6},l.a.createElement("h2",{className:"mainContent__title"},"Popular Movies"),e.popularMoviesData?l.a.createElement(x,{styled:"mainContent__list",number:e.number,data:e.popularMoviesData.results}):l.a.createElement(b,null))))},M=a(273),I=function(e){var t=e.card,a=e.type,n="/movie_details/".concat(t.id),r=t.title,c=t.poster_path;return"tv"===a?(r=t.name,n="/series_details/".concat(t.id)):"person"===a&&(r=t.name,n="/person_details/".concat(t.id),c=t.profile_path),l.a.createElement(s.b,{className:"Card",to:n},l.a.createElement(M.a,{className:"movieCard",bg:"transparent",text:"dark"},l.a.createElement(j,{styled:"card-img-top movieCard__img",src:c,width:200,height:300,type:"w500",alt:"The movie titled: ".concat(r),title:r,text:"No Image"}),l.a.createElement(M.a.Body,{className:"movieCard__body"},l.a.createElement(M.a.Text,{className:"movieCard__body__text"},r))))},Y=function(e){var t;return t=e.loading||!e.listData?l.a.createElement(b,null):e.listData.results.map((function(e,t){return l.a.createElement(N.a,{className:"searchResult__col",key:"".concat(t,"-").concat(e.id),xs:6,md:4,lg:3},l.a.createElement(I,{key:t,card:e}))})),l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{className:"mainContent__title"},e.title),l.a.createElement(y.a,null,t))},F=a(27),q=a.n(F),R=a(106),A=a(107),P=a.n(A),B=function(e){var t=Object(n.useState)(null),a=Object(i.a)(t,2),l=a[0],r=a[1],c=Object(n.useState)(null),s=Object(i.a)(c,2),m=s[0],o=s[1],_=Object(n.useState)(!1),u=Object(i.a)(_,2),d=u[0],p=u[1],E=null;return e.imdbID?E="".concat("https://www.omdbapi.com/","?apikey=").concat("f939fc5e","&i=").concat(e.imdbID):e.detailsID?E="".concat("https://api.themoviedb.org/3/").concat(e.queryType,"/").concat(e.detailsID,"?api_key=").concat("6e28c94e1391da07f513a6acbb34fa23","&append_to_response=videos,images,credits"):e.creditsID?E="".concat("https://api.themoviedb.org/3/").concat(e.queryType,"/").concat(e.creditsID,"/combined_credits?api_key=").concat("6e28c94e1391da07f513a6acbb34fa23"):e.query?E="".concat("https://api.themoviedb.org/3/","search/").concat(e.queryType,"?api_key=").concat("6e28c94e1391da07f513a6acbb34fa23","&query=").concat(e.query,"&page=").concat(e.page):e.queryType&&e.listType&&(E="".concat("https://api.themoviedb.org/3/").concat(e.queryType,"/").concat(e.listType,"?api_key=").concat("6e28c94e1391da07f513a6acbb34fa23","&page=").concat(e.page)),Object(n.useEffect)((function(){null!==E&&function(){var e=Object(R.a)(q.a.mark((function e(){var t;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.prev=1,e.next=4,P.a.get(E);case 4:t=e.sent,r(t.data),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),o(e.t0),console.error("%cData Fetching Error:","font-size: 18px",e.t0);case 12:return e.prev=12,p(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,8,12,15]])})));return function(){return e.apply(this,arguments)}}()()}),[E]),{response:l,error:m,loading:d}},L=function(e){var t,a=Object(n.useState)(null),r=Object(i.a)(a,2),c=r[0],s=r[1],o=Object(n.useState)(0),_=Object(i.a)(o,2),u=_[0],d=_[1],p=Object(m.g)(),E=B({queryType:p.type,query:p.query,page:e.page});return Object(n.useEffect)((function(){null!==E.response&&(s(E.response),d(E.response.total_results))}),[E.response]),t=E.loading||!E.response?l.a.createElement(b,null):c.results.map((function(e,t){return l.a.createElement(N.a,{className:"searchResult__col",key:"".concat(t,"-").concat(e.id),sm:12,md:6,lg:3},l.a.createElement(I,{key:t,card:e,type:p.type}))})),l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{className:"mainContent__title"},e.title,": ",p.query," "),l.a.createElement("h3",null,"Total results: ",u),l.a.createElement(y.a,null,t))},U=a(48),W=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{className:"mainContent__title"},"Details"),l.a.createElement(b,null))},K=function(e){return l.a.createElement(l.a.Fragment,null,e.tagline?l.a.createElement("p",{className:"tagline"},e.tagline):null,l.a.createElement("h2",{className:"title"},e.title),l.a.createElement("div",{className:"text"},e.overview))},G=function(e){var t="N/A";return e.data&&(t=e.data.map((function(e,t){return l.a.createElement("span",{className:"genres badge badge-pill badge-dark",key:t},e.name)}))),l.a.createElement(l.a.Fragment,null,t)},J=function(e){var t="N/A",a=e.data,n=function(e){return Array.from(new Set(e.map((function(e){return e.id})))).map((function(t){return e.find((function(e){return e.id===t}))}))};return"director"===e.type&&(a=n(a=e.fullData.filter((function(e){return"Directing"===e.department&&"Director"===e.job})))),"writer"===e.type&&(a=n(a=e.fullData.filter((function(e){return"Writing"===e.department&&("Screenplay"===e.job||"Writer"===e.job)})))),a&&(t=a.map((function(e,t){return l.a.createElement(s.b,{className:"person-link",key:t,to:"/person_details/".concat(e.id)},e.name)}))),l.a.createElement(l.a.Fragment,null,t)},V=function(e){var t="N/A",a=function(e,t){return l.a.createElement(N.a,{xs:6,md:3,lg:2,key:t,className:"cast__col"},l.a.createElement(s.b,{className:"cast__link",to:"/person_details/".concat(e.id)},l.a.createElement("div",{className:"cast__link__data"},l.a.createElement(j,{src:e.profile_path,width:350,height:520,type:"w200",styled:"cast__link__data__image",title:e.name,text:"No Image"}),l.a.createElement("p",{className:"cast__link__data__name"},e.name),l.a.createElement("small",{className:"cast__link__data__character"},e.character))))};return e.data&&(t=e.number?e.data.slice(0,e.number).map((function(e,t){return a(e,t)})):e.data.map((function(e,t){return a(e,t)}))),l.a.createElement("div",{className:"cast"},l.a.createElement("h2",{className:"cast__title"},e.title),l.a.createElement(y.a,null,t))},z=function(e){var t=Object(n.useState)(0),a=Object(i.a)(t,2),r=a[0],c=a[1],s="0 0 38 38",m="19",o="19",_="15.91549430918954",u=r,d=e.percentage;e.decimal&&(u=r/10,d=10*e.percentage);var p=d/e.speed,E=Object(n.useCallback)((function(){var e=!0;return(d>0||r<d)&&e&&setTimeout((function(){c(r+1)}),p),function(){return e=!1}}),[r,d,p]);return Object(n.useEffect)((function(){u<e.percentage&&E()}),[u,e.percentage,E]),l.a.createElement(l.a.Fragment,null,l.a.createElement("figure",{className:"circleRating"},l.a.createElement("svg",{viewBox:s},l.a.createElement("circle",{className:"circleRating__donut-ring",cx:m,cy:o,r:_,fill:"transparent",stroke:"ghostwhite",strokeWidth:1,strokeDasharray:e.trailSpaced?1:0}),l.a.createElement("circle",{className:"circleRating__donut-segment",cx:m,cy:o,r:_,fill:"transparent",stroke:"black",strokeWidth:1,strokeDasharray:"".concat(r," ").concat(100-r),strokeDashoffset:25})),l.a.createElement("figcaption",{className:"circleRating__chart"},l.a.createElement("p",{className:"circleRating__chart__number"},u))),l.a.createElement("p",{className:"circleRating__label"},e.innerText))},H=function(e){var t,a,r=Object(n.useState)(null),c=Object(i.a)(r,2),s=c[0],m=c[1],o=null,_=B({imdbID:e.id,page:1});return Object(n.useEffect)((function(){null!==_.response&&m(_.response)}),[_.response]),e.imdb&&s&&(t=s.imdbRating>0?l.a.createElement(N.a,{xs:6,sm:4,className:"imdb"},l.a.createElement(z,{innerText:"IMDB",percentage:s.imdbRating,trailSpaced:!1,speed:10,decimal:!0})):null),e.meta&&s&&(a=s.Metascore>0?l.a.createElement(N.a,{xs:6,sm:4,className:"metascore"},l.a.createElement(z,{innerText:"Metascore",percentage:s.Metascore,trailSpaced:!1,speed:10})):null),e.tmdb&&(o=l.a.createElement(N.a,{xs:6,sm:4,className:"tmdb"},l.a.createElement(z,{innerText:"The Movie Database",percentage:e.tmdb,trailSpaced:!1,speed:10,decimal:!0}))),l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{className:"title"},e.title),l.a.createElement(y.a,{className:"rating"},t,a,o))},$=a(25),Q=a.n($),X=function(e){var t=e.videos.map((function(e,t){return l.a.createElement("div",{className:"item carousel__item video",key:t},l.a.createElement("iframe",{src:"//www.youtube.com/embed/".concat(e.key,"?enablejsapi=1&origin=").concat(window.location.origin),width:"100%",height:"100%",frameBorder:"0",allow:"autoplay; encrypted-media",allowFullScreen:!0,title:e.name}))}));return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,e.title),l.a.createElement(Q.a,{touchTrackingEnabled:!0,dotsDisabled:!0,responsive:{760:{items:3},1020:{items:4}},mouseTrackingEnabled:!0},t))},Z=function(e){e.credits.sort((function(e,t){return new Date(t.popularity)-new Date(e.popularity)}));var t=e.credits.map((function(t,a){return l.a.createElement("div",{className:"item carousel__item cast",key:a},l.a.createElement(s.b,{className:"cast__link",to:(r=t.media_type,c=t.id,"tv"===r?"/series_details/".concat(c):"/".concat(r,"_details/").concat(c))},l.a.createElement("div",{className:"cast__link__data"},l.a.createElement("img",{onDragStart:e.handle,className:"cast__link__data__image",src:(n=t.poster_path,n?"https://image.tmdb.org/t/p/w500".concat(n):Object(w.generateCustomPlaceholderURL)(350,520,{textColor:"#ffffff",text:"No Image"})),title:t.original_title?t.original_title:t.original_name,alt:t.original_title?t.original_title:t.original_name}),l.a.createElement("div",{className:"cast__link__data__texts"},l.a.createElement("p",{className:"cast__link__data__name"},t.original_title?t.original_title:t.original_name),t.character?l.a.createElement("small",{className:"cast__link__data__character"},t.character):null,t.job?l.a.createElement("small",{className:"cast__link__data__job"},t.job):null))));var n,r,c}));return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,e.title),l.a.createElement(Q.a,{touchTrackingEnabled:!0,dotsDisabled:!0,responsive:{760:{items:3},1020:{items:4}},mouseTrackingEnabled:!0},t))},ee=a(65),te=function(e){var t=e.images.map((function(t,a){return l.a.createElement("a",{href:"https://image.tmdb.org/t/p/original".concat(t.file_path),key:a,"data-attribute":"SRL"},l.a.createElement("img",{onDragStart:e.handle,className:"item carousel__item",src:"https://image.tmdb.org/t/p/w500".concat(t.file_path),alt:"".concat(e.alt,"-").concat(a)}))}));return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,e.title),l.a.createElement(ee.b,null,l.a.createElement(ee.a,null,l.a.createElement(Q.a,{touchTrackingEnabled:!0,dotsDisabled:!0,responsive:e.responsive,mouseTrackingEnabled:!0},t))))},ae=function(e){var t=function(e){return e.preventDefault()},a=function(e){return e.length<3?{0:{items:1},760:{items:2}}:e.length<2?{0:{items:1}}:{0:{items:1},760:{items:2},1020:{items:3}}};return e.images&&e.images.length>0?l.a.createElement(te,{title:e.title,images:e.images,responsive:a(e.images),handle:t}):e.videos&&e.videos.length>0||e.credits&&e.credits.length>0?e.videos&&e.videos.length>0?l.a.createElement(X,{title:e.title,videos:e.videos,responsive:a(e.videos)}):l.a.createElement(Z,{title:e.title,credits:e.credits,handle:t}):null},ne=a(66),le=a.n(ne),re=function(){var e,t=Object(m.g)(),a=Object(n.useState)(null),r=Object(i.a)(a,2),c=r[0],s=r[1],o=B({queryType:"movie",detailsID:t.id});Object(n.useEffect)((function(){null!==o.response&&s(o.response)}),[o.response]);var _=null;return c?(null!==c.backdrop_path&&(_={backgroundImage:"url(https://image.tmdb.org/t/p/original".concat(c.backdrop_path,")")}),e=l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"details__background",style:_}),l.a.createElement("div",{className:"movie details__content"},l.a.createElement(y.a,null,l.a.createElement(N.a,{xs:6,md:3,className:"details__content__poster"},l.a.createElement(j,{src:c.poster_path,width:200,height:300,type:"w200",styled:"details__content__poster__image",title:c.title,text:"No Image"})),l.a.createElement(N.a,{sm:12,md:9,className:"details__content__head"},l.a.createElement("h1",{className:"details__content__head__title"},c.title),l.a.createElement("p",{className:"details__content__head__time"},l.a.createElement("span",{className:"details__content__head__time__icon"},l.a.createElement(U.a,null))," ",function(e){var t=e/60,a=Math.floor(t),n=60*(t-a),l=Math.round(n);return"".concat(a,"hr ").concat(l,"min")}(c.runtime)),l.a.createElement("p",{className:"details__content__head__credit"},"Genres ",l.a.createElement("span",null,l.a.createElement(G,{data:c.genres}))),l.a.createElement("p",{className:"details__content__head__credit"},"Directors ",l.a.createElement("span",null,l.a.createElement(J,{type:"director",fullData:c.credits.crew}))),l.a.createElement("p",{className:"details__content__head__credit"},"Written ",l.a.createElement("span",null,l.a.createElement(J,{type:"writer",fullData:c.credits.crew}))))),l.a.createElement("div",{className:"details__content__body"},l.a.createElement(y.a,null,l.a.createElement(N.a,{sm:12,md:3,className:"details__content__body__short"},l.a.createElement("h3",null,"Release date"),l.a.createElement("p",null,S()(c.release_date).format("D MMMM YYYY")),l.a.createElement("h3",null,"Status"),l.a.createElement("p",null,c.status),l.a.createElement("h3",null,"Budget"),l.a.createElement("p",null,c.budget>0?le.a.format(c.budget,{code:"USD",decimalDigits:0}):"N/A"),l.a.createElement("h3",null,"Revenue"),l.a.createElement("p",null,c.revenue>0?le.a.format(c.revenue,{code:"USD",decimalDigits:0}):"N/A"),l.a.createElement("h3",null,"Official website"),l.a.createElement("a",{href:c.homepage,title:c.title,rel:"noopener noreferrer",target:"_blank"},"Link")),l.a.createElement(N.a,{sm:12,md:9,className:"details__content__body__plot"},l.a.createElement("p",{className:"tagline"},c.tagline),l.a.createElement(H,{title:"Rating",id:c.imdb_id,imdb:!0,meta:!0,tmdb:c.vote_average}),l.a.createElement(K,{title:"Plot",overview:c.overview}),l.a.createElement(ae,{className:"carousel",alt:c.title,title:"Photos",images:c.images.backdrops}),l.a.createElement(ae,{className:"carousel",alt:c.title,title:"Videos",videos:c.videos.results}),l.a.createElement(V,{title:"Cast",data:c.credits.cast,number:12}))))))):e=l.a.createElement(W,null),l.a.createElement(l.a.Fragment,null,e)},ce=function(){var e,t=Object(m.g)(),a=Object(n.useState)(null),r=Object(i.a)(a,2),c=r[0],s=r[1],o=B({queryType:"tv",detailsID:t.id});Object(n.useEffect)((function(){null!==o.response&&s(o.response)}),[o.response]);var _=null;return c?(null!==c.backdrop_path&&(_={backgroundImage:"url(https://image.tmdb.org/t/p/original".concat(c.backdrop_path,")")}),e=l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"details__background",style:_}),l.a.createElement("div",{className:"series details__content"},l.a.createElement(y.a,null,l.a.createElement(N.a,{xs:6,md:3,className:"details__content__poster"},l.a.createElement(j,{src:c.poster_path,width:200,height:300,type:"w200",styled:"details__content__poster__image",title:c.title,text:"No Image"})),l.a.createElement(N.a,{sm:12,md:9,className:"details__content__head"},l.a.createElement("h1",{className:"details__content__head__title"},c.name),l.a.createElement("p",{className:"details__content__head__time"},l.a.createElement("span",{className:"details__content__head__time__icon"},l.a.createElement(U.a,null))," ",c.episode_run_time[0]," min"),l.a.createElement("p",{className:"details__content__head__credit"},"Genres ",l.a.createElement("span",null,l.a.createElement(G,{data:c.genres}))),l.a.createElement("p",{className:"details__content__head__credit"},"Date ",l.a.createElement("span",null,S()(c.first_air_date).format("YYYY")," - ",S()(c.last_air_date).format("YYYY"))),l.a.createElement("p",{className:"details__content__head__credit"},"Creators ",l.a.createElement("span",null,l.a.createElement(J,{data:c.created_by}))))),l.a.createElement("div",{className:"details__content__body"},l.a.createElement(y.a,null,l.a.createElement(N.a,{sm:12,md:3,className:"details__content__body__short"},l.a.createElement("h3",null,"Release date"),l.a.createElement("p",null,c.release_date),l.a.createElement("h3",null,"Status"),l.a.createElement("p",null,c.status),l.a.createElement("h3",null,"Total episodes"),l.a.createElement("p",null,c.number_of_episodes>0?c.number_of_episodes:"N/A"),l.a.createElement("h3",null,"Seasons"),l.a.createElement("p",null,c.number_of_seasons>0?c.number_of_seasons:"N/A"),l.a.createElement("h3",null,"Official website"),l.a.createElement("a",{href:c.homepage,title:c.title,rel:"noopener noreferrer",target:"_blank"},"Link")),l.a.createElement(N.a,{sm:12,md:9,className:"details__content__body__plot"},l.a.createElement(H,{title:"Rating",id:c.imdb_id,imdb:!0,meta:!0,tmdb:c.vote_average}),l.a.createElement(K,{tagline:c.tagline,title:"Plot",overview:c.overview}),l.a.createElement(ae,{type:"image",className:"carousel",alt:c.name,title:"Photos",images:c.images.backdrops}),l.a.createElement(ae,{className:"carousel",title:"Videos",videos:c.videos.results}),l.a.createElement(V,{title:"Cast",data:c.credits.cast,number:12}))))))):e=l.a.createElement(W,null),l.a.createElement(l.a.Fragment,null,e)},se=function(){var e,t=Object(m.g)(),a=Object(n.useState)(null),r=Object(i.a)(a,2),c=r[0],s=r[1],o=Object(n.useState)(null),_=Object(i.a)(o,2),u=_[0],d=_[1],p=B({queryType:"person",detailsID:t.id}),E=B({queryType:"person",creditsID:t.id});return Object(n.useEffect)((function(){null!==p.response&&s(p.response),null!==E.response&&d(E.response)}),[p.response,E.response]),e=c&&u?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"person details__background"}),l.a.createElement("div",{className:"person details__content"},l.a.createElement(y.a,null,l.a.createElement(N.a,{xs:6,md:3,className:"details__content__poster"},l.a.createElement(j,{src:c.profile_path,width:210,height:315,type:"w200",styled:"details__content__poster__image",title:c.name,text:"No Image"})),l.a.createElement(N.a,{sm:12,md:9,className:"details__content__head"},l.a.createElement("h1",{className:"details__content__head__title"},c.name),l.a.createElement("p",{className:"details__content__head__credit"},"Born ",l.a.createElement("span",null,c.birthday?S()(c.birthday).format("MMM D, YYYY"):"N/A"," in ",c.place_of_birth?c.place_of_birth:"N/A")),c.deathday?l.a.createElement("p",{className:"details__content__head__credit"},"Death ",l.a.createElement("span",null,S()(c.deathday).format("MMM D, YYYY"))):null,l.a.createElement("p",{className:"details__content__head__credit"},"Know for ",l.a.createElement("span",null,c.known_for_department)))),l.a.createElement("div",{className:"details__content__body"},l.a.createElement(y.a,null,l.a.createElement(N.a,{sm:12,md:3,className:"details__content__body__short"},l.a.createElement("h3",null,"Official website"),l.a.createElement("p",null,c.homepage?l.a.createElement("a",{href:c.homepage,rel:"noopener noreferrer",target:"_blank"},"Link"):"N/A"),l.a.createElement("h3",null,"Imdb Link"),l.a.createElement("p",null,c.imdb_id?l.a.createElement("a",{href:"https://www.imdb.com/name/".concat(c.imdb_id),rel:"noopener noreferrer",target:"_blank"},"Link"):"N/A")),l.a.createElement(N.a,{sm:12,md:9,className:"details__content__body__plot"},l.a.createElement(K,{title:"Biography",overview:c.biography?c.biography:"N/A"}),l.a.createElement(ae,{className:"carousel",title:"Filmography (Actor)",credits:u.cast}),l.a.createElement(ae,{className:"carousel",title:"Filmography (crew)",credits:u.crew})))))):l.a.createElement(W,null),l.a.createElement(l.a.Fragment,null,e)},ie=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{className:"mainContent__title"},"Oops! Page not found!"),l.a.createElement("div",{className:"error404"},l.a.createElement("div",{className:"glitch","data-text":"404"},"404")))};var me=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),s=Object(i.a)(c,2),_=s[0],u=s[1],p=Object(n.useState)(null),E=Object(i.a)(p,2),g=E[0],h=E[1],y=Object(n.useState)(null),N=Object(i.a)(y,2),k=N[0],w=N[1],D=Object(m.f)(),j=B({queryType:"movie",listType:"popular",page:1}),O=B({queryType:"movie",listType:"now_playing",page:1}),S=B({queryType:"movie",listType:"upcoming",page:1}),T=B({queryType:"tv",listType:"popular",page:1});return Object(n.useEffect)((function(){null!==j.response&&u(j.response),null!==S.response&&h(S.response),null!==O.response&&r(O.response),null!==T.response&&w(T.response)}),[j.response,S.response,O.response,T.response]),l.a.createElement("div",{className:"App"},l.a.createElement(v,{title:"Movie Search",search:function(e,t){e&&t&&D.push("/search/".concat(t,"/").concat(e))}}),l.a.createElement(o.a,{className:"mainContent"},l.a.createElement(n.Suspense,{fallback:l.a.createElement(b,null)}),l.a.createElement(f,null),l.a.createElement(m.c,null,l.a.createElement(m.a,{path:"/upcoming"},l.a.createElement(Y,{listData:g,title:"Upcoming Movies",loading:S.loading,type:"upcoming"})),l.a.createElement(m.a,{path:"/popular"},l.a.createElement(Y,{listData:_,loading:j.loading,title:"Popular Movies",type:"popular"})),l.a.createElement(m.a,{path:"/now_playing"},l.a.createElement(Y,{listData:a,loading:O.loading,title:"Now Playing Movies",type:"now_playing"})),l.a.createElement(m.a,{path:"/movie_details/:id",component:re}),l.a.createElement(m.a,{path:"/series_details/:id",component:ce}),l.a.createElement(m.a,{path:"/person_details/:id",component:se}),l.a.createElement(m.a,{exact:!0,path:"/"},l.a.createElement(C,{upcomingMoviesData:g,popularMoviesData:_,nowPlayingMoviesData:a,popularSeriesData:k,number:10})),l.a.createElement(m.a,{path:"/search/:type/:query"},l.a.createElement(L,{page:1,title:"Search",type:"search"})),l.a.createElement(m.a,{component:ie}))),l.a.createElement("footer",null,l.a.createElement("p",null,l.a.createElement(d.b,null)," ",l.a.createElement(d.a,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(262);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(s.a,null,l.a.createElement(me,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[108,1,2]]]);
//# sourceMappingURL=main.7c06733e.chunk.js.map