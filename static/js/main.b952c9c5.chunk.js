(this["webpackJsonpmovie-app-react"]=this["webpackJsonpmovie-app-react"]||[]).push([[0],{108:function(e,t,a){},109:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(21),c=a.n(r),s=a(7),i=a(6),m=a(8),o=a(111),u=a(116),_=a(112),d=a(22),p=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)("movie"),m=Object(i.a)(s,2),p=m[0],E=m[1];return l.a.createElement(o.a,{className:"SearchBar"},l.a.createElement(u.a,{onChange:function(e){E(e.target.value)},className:"SearchBar__select",as:"select",value:p},l.a.createElement("option",{value:"movie"},"Movie"),l.a.createElement("option",{value:"tv"},"Series"),l.a.createElement("option",{value:"person"},"Person")),l.a.createElement(u.a,{placeholder:"Search...",className:"SearchBar__input",value:r,onChange:function(e){c(e.target.value)}}),l.a.createElement(_.a,{onClick:function(t){t.preventDefault(),e.search(r,p)},className:"SearchBar__button",variant:"danger"},l.a.createElement(d.c,null)))},E=a(115),g=a(117),h=a(57),b=Object(m.h)((function(e){var t="",a=!1;/movie_details/.test(document.URL)&&(t=" details",a=!0),/person_details/.test(document.URL)&&(t=" details",a=!0),/series_details/.test(document.URL)&&(t=" details",a=!0);return l.a.createElement("header",{className:"header".concat(t)},l.a.createElement(E.a,{className:"header__navBar",sticky:"top",expand:"md",bg:"transparent",variant:"dark"},l.a.createElement(s.c,{className:"navbar-brand",variant:"danger",exact:!0,to:"/"},l.a.createElement("span",{className:"navbar-brand__logo"},l.a.createElement(h.a,null)),e.title),l.a.createElement(E.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(E.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(g.a,{defaultActiveKey:"/",activeKey:"active",className:"mr-auto"},l.a.createElement(s.c,{activeClassName:"active",className:"nav-link",exact:!0,to:"/"},"Home"),l.a.createElement(s.c,{activeClassName:"active",className:"nav-link",exact:!0,to:"/now_playing"},"Now Playing Movies"),l.a.createElement(s.c,{activeClassName:"active",className:"nav-link",exact:!0,to:"/popular"},"Popular Movies"),l.a.createElement(s.c,{activeClassName:"active",className:"nav-link",to:"/upcoming"},"Upcoming Movies")),a?l.a.createElement(_.a,{variant:"danger",className:"btnBack ripple",onClick:function(){window.history.back()}},"\u2770\u2770 Back "):null)),a?null:l.a.createElement(p,{className:"header__search",search:e.search}))})),v=function(){return l.a.createElement("div",{className:"loading"},l.a.createElement("div",{className:"loading__inner"},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null)))};var f=Object(m.h)((function(e){var t=e.history;return Object(n.useEffect)((function(){var e=t.listen((function(){window.scrollTo(0,0)}));return function(){e()}}),[t]),null})),y=a(113),N=a(114),k=a(119),D=a(61),w=a(62),O=function(e){var t=e.title,a=Object(D.generateCustomPlaceholderURL)(e.width,e.height,{textColor:"#ffffff",text:e.text});return e.alt&&(t=e.alt),null!==e.src?l.a.createElement(w.Img,{className:e.styled,src:"https://image.tmdb.org/t/p/".concat(e.type).concat(e.src),placeholderSrc:"https://image.tmdb.org/t/p/w200".concat(e.src),alt:t,title:e.title}):l.a.createElement("img",{className:e.styled,src:a,alt:t,title:e.title})},j=a(17),S=a.n(j),T=function(e){var t=e.movieTitle,a="/movie_details/".concat(e.movieID),n=e.releaseDate;return e.seriesTitle&&(t=e.seriesTitle,a="/series_details/".concat(e.movieID),n=e.fisrtAirDate),l.a.createElement(k.a.Item,{className:"mainContent__list__item"},l.a.createElement(s.b,{to:a},l.a.createElement("div",{className:"mainContent__list__item__image"},l.a.createElement(O,{src:e.img,width:100,height:100,type:"w200",title:t,text:"Img"})),l.a.createElement("div",{className:"mainContent__list__item__title"},t,l.a.createElement("span",{className:"mainContent__list__item__title__date"},S()(n).format("YYYY")))))},M=function(e){var t,a=e.data,n=e.styled,r=e.number,c=void 0===r?0:r;return t=a?c>0?a.slice(0,c).map((function(e,t){return l.a.createElement(T,{key:t,img:e.poster_path,movieID:e.id,movieTitle:e.title,releaseDate:e.release_date,fisrtAirDate:e.first_air_date,seriesTitle:e.original_name})})):a.map((function(e,t){return l.a.createElement(T,{key:t,img:e.poster_path,movieID:e.id,movieTitle:e.title,releaseDate:e.release_date,fisrtAirDate:e.first_air_date,seriesTitle:e.original_name})})):l.a.createElement(v,null),l.a.createElement(k.a,{variant:"flush",className:n},t)},x=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(y.a,null,l.a.createElement(N.a,{sm:12,md:6},l.a.createElement("h2",{className:"mainContent__title"},"Upcoming Movies"),e.upcomingMoviesData?l.a.createElement(M,{styled:"mainContent__list",number:e.number,data:e.upcomingMoviesData.results}):l.a.createElement(v,null)),l.a.createElement(N.a,{sm:12,md:6},l.a.createElement("h2",{className:"mainContent__title"},"Now Playing Movies"),e.nowPlayingMoviesData?l.a.createElement(M,{styled:"mainContent__list",number:e.number,data:e.nowPlayingMoviesData.results}):l.a.createElement(v,null))),l.a.createElement(y.a,null,l.a.createElement(N.a,{sm:12,md:6},l.a.createElement("h2",{className:"mainContent__title"},"Popular Series"),e.popularSeriesData?l.a.createElement(M,{styled:"mainContent__list",number:e.number,data:e.popularSeriesData.results}):l.a.createElement(v,null)),l.a.createElement(N.a,{sm:12,md:6},l.a.createElement("h2",{className:"mainContent__title"},"Popular Movies"),e.popularMoviesData?l.a.createElement(M,{styled:"mainContent__list",number:e.number,data:e.popularMoviesData.results}):l.a.createElement(v,null))))},C=a(118),I=function(e){var t=e.card,a=e.type,n="/movie_details/".concat(t.id),r=t.title,c=t.poster_path;return"tv"===a?(r=t.name,n="/series_details/".concat(t.id)):"person"===a&&(r=t.name,n="/person_details/".concat(t.id),c=t.profile_path),l.a.createElement(s.b,{className:"Card",to:n},l.a.createElement(C.a,{className:"movieCard",bg:"transparent",text:"dark"},l.a.createElement(O,{styled:"card-img-top movieCard__img",src:c,width:200,height:300,type:"w500",alt:"The movie titled: ".concat(r),title:r,text:"No Image"}),l.a.createElement(C.a.Body,{className:"movieCard__body"},l.a.createElement(C.a.Text,{className:"movieCard__body__text"},r))))},Y=function(e){var t;return t=e.loading||!e.listData?l.a.createElement(v,null):e.listData.results.map((function(e,t){return l.a.createElement(N.a,{className:"searchResult__col",key:"".concat(t,"-").concat(e.id),xs:6,md:4,lg:3},l.a.createElement(I,{key:t,card:e}))})),l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{className:"mainContent__title"},e.title),l.a.createElement(y.a,null,t))},q=a(38),R=a.n(q),A=a(63),F=a(64),B=a.n(F),P=function(e){var t=Object(n.useState)(null),a=Object(i.a)(t,2),l=a[0],r=a[1],c=Object(n.useState)(null),s=Object(i.a)(c,2),m=s[0],o=s[1],u=Object(n.useState)(!1),_=Object(i.a)(u,2),d=_[0],p=_[1],E=null;return e.imdbID?E="".concat("https://www.omdbapi.com/","?apikey=").concat("f939fc5e","&i=").concat(e.imdbID):e.detailsID?E="".concat("https://api.themoviedb.org/3/").concat(e.queryType,"/").concat(e.detailsID,"?api_key=").concat("6e28c94e1391da07f513a6acbb34fa23"):e.creditsID?E="".concat("https://api.themoviedb.org/3/").concat(e.queryType,"/").concat(e.creditsID,"/credits?api_key=").concat("6e28c94e1391da07f513a6acbb34fa23"):e.query?E="".concat("https://api.themoviedb.org/3/","search/").concat(e.queryType,"?api_key=").concat("6e28c94e1391da07f513a6acbb34fa23","&query=").concat(e.query,"&page=").concat(e.page):e.queryType&&e.listType&&(E="".concat("https://api.themoviedb.org/3/").concat(e.queryType,"/").concat(e.listType,"?api_key=").concat("6e28c94e1391da07f513a6acbb34fa23","&page=").concat(e.page)),Object(n.useEffect)((function(){null!==E&&function(){var e=Object(A.a)(R.a.mark((function e(){var t;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.prev=1,e.next=4,B.a.get(E);case 4:t=e.sent,r(t.data),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),o(e.t0),console.error("%cData Fetching Error:","font-size: 18px",e.t0);case 12:return e.prev=12,p(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,8,12,15]])})));return function(){return e.apply(this,arguments)}}()()}),[E]),{response:l,error:m,loading:d}},L=function(e){var t,a=Object(n.useState)(null),r=Object(i.a)(a,2),c=r[0],s=r[1],o=Object(n.useState)(0),u=Object(i.a)(o,2),_=u[0],d=u[1],p=Object(m.g)(),E=P({queryType:p.type,query:p.query,page:e.page});return Object(n.useEffect)((function(){null!==E.response&&(s(E.response),d(E.response.total_results))}),[E.response]),t=E.loading||!E.response?l.a.createElement(v,null):c.results.map((function(e,t){return l.a.createElement(N.a,{className:"searchResult__col",key:"".concat(t,"-").concat(e.id),sm:12,md:6,lg:3},l.a.createElement(I,{key:t,card:e,type:p.type}))})),l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{className:"mainContent__title"},e.title,": ",p.query," "),l.a.createElement("h3",null,"Total results: ",_),l.a.createElement(y.a,null,t))},U=a(29),W=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{className:"mainContent__title"},"Details"),l.a.createElement(v,null))},K=function(e){return l.a.createElement(l.a.Fragment,null,e.tagline?l.a.createElement("p",{className:"tagline"},e.tagline):null,l.a.createElement("h2",{className:"title"},e.title),l.a.createElement("div",{className:"text"},e.overview))},G=function(e){var t="N/A";return e.data&&(t=e.data.map((function(e,t){return l.a.createElement("span",{className:"genres badge badge-pill badge-dark",key:t},e.name)}))),l.a.createElement(l.a.Fragment,null,t)},J=function(e){var t="N/A",a=e.data,n=function(e){return Array.from(new Set(e.map((function(e){return e.id})))).map((function(t){return e.find((function(e){return e.id===t}))}))};return"director"===e.type&&(a=n(a=e.fullData.filter((function(e){return"Directing"===e.department&&"Director"===e.job})))),"writer"===e.type&&(a=n(a=e.fullData.filter((function(e){return"Writing"===e.department&&("Screenplay"===e.job||"Writer"===e.job)})))),a&&(t=a.map((function(e,t){return l.a.createElement(s.b,{className:"person-link",key:t,to:"/person_details/".concat(e.id)},e.name)}))),l.a.createElement(l.a.Fragment,null,t)},z=function(e){var t="N/A",a=function(e,t){return l.a.createElement(N.a,{xs:6,md:3,lg:2,key:t,className:"cast__col"},l.a.createElement(s.b,{className:"cast__link",to:"/person_details/".concat(e.id)},l.a.createElement("div",{className:"cast__link__data"},l.a.createElement(O,{src:e.profile_path,width:350,height:520,type:"w200",styled:"cast__link__data__image",title:e.name,text:"No Image"}),l.a.createElement("p",{className:"cast__link__data__name"},e.name),l.a.createElement("small",{className:"cast__link__data__character"},e.character))))};return e.data&&(t=e.number?e.data.slice(0,e.number).map((function(e,t){return a(e,t)})):e.data.map((function(e,t){return a(e,t)}))),l.a.createElement("div",{className:"cast"},l.a.createElement("h2",{className:"cast__title"},e.title),l.a.createElement(y.a,null,t))},H=function(e){var t=Object(n.useState)(0),a=Object(i.a)(t,2),r=a[0],c=a[1],s="0 0 38 38",m="19",o="19",u="15.91549430918954",_=r,d=e.percentage;e.decimal&&(_=r/10,d=10*e.percentage);var p=d/e.speed,E=Object(n.useCallback)((function(){(d>0||r<d)&&setTimeout((function(){c(r+1)}),p)}),[r,d,p]);return Object(n.useEffect)((function(){_<e.percentage&&E()}),[_,e.percentage,E]),l.a.createElement(l.a.Fragment,null,l.a.createElement("figure",{className:"circleRating"},l.a.createElement("svg",{viewBox:s},l.a.createElement("circle",{className:"circleRating__donut-ring",cx:m,cy:o,r:u,fill:"transparent",stroke:"ghostwhite",strokeWidth:1,strokeDasharray:e.trailSpaced?1:0}),l.a.createElement("circle",{className:"circleRating__donut-segment",cx:m,cy:o,r:u,fill:"transparent",stroke:"black",strokeWidth:1,strokeDasharray:"".concat(r," ").concat(100-r),strokeDashoffset:25})),l.a.createElement("figcaption",{className:"circleRating__chart"},l.a.createElement("p",{className:"circleRating__chart__number"},_))),l.a.createElement("p",{className:"circleRating__label"},e.innerText))},$=function(e){var t,a,r=Object(n.useState)(null),c=Object(i.a)(r,2),s=c[0],m=c[1],o=null,u=P({imdbID:e.id,page:1});return Object(n.useEffect)((function(){null!==u.response&&m(u.response)}),[u.response]),e.imdb&&s&&(t=s.imdbRating>0?l.a.createElement(N.a,{sm:4,className:"imdb"},l.a.createElement(H,{innerText:"IMDB",percentage:s.imdbRating,trailSpaced:!1,speed:10,decimal:!0})):null),e.meta&&s&&(a=s.Metascore>0?l.a.createElement(N.a,{sm:4,className:"metascore"},l.a.createElement(H,{innerText:"Metascore",percentage:s.Metascore,trailSpaced:!1,speed:10})):null),e.tmdb&&(o=l.a.createElement(N.a,{sm:4,className:"tmdb"},l.a.createElement(H,{innerText:"The Movie Database",percentage:e.tmdb,trailSpaced:!1,speed:10,decimal:!0}))),l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{className:"title"},e.title),l.a.createElement(y.a,{className:"rating"},t,a,o))},Q=a(39),V=a.n(Q),X=function(){var e,t=Object(m.g)(),a=Object(n.useState)(null),r=Object(i.a)(a,2),c=r[0],s=r[1],o=Object(n.useState)(null),u=Object(i.a)(o,2),_=u[0],d=u[1],p=P({queryType:"movie",detailsID:t.id}),E=P({queryType:"movie",creditsID:t.id});Object(n.useEffect)((function(){null!==p.response&&s(p.response),null!==E.response&&d(E.response)}),[p.response,E.response]);var g=null;return c&&_?(null!==c.backdrop_path&&(g={backgroundImage:"url(https://image.tmdb.org/t/p/original".concat(c.backdrop_path,")")}),e=l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"details__background",style:g}),l.a.createElement("div",{className:"movie details__content"},l.a.createElement(y.a,null,l.a.createElement(N.a,{xs:6,md:3,className:"details__content__poster"},l.a.createElement(O,{src:c.poster_path,width:200,height:300,type:"w200",styled:"details__content__poster__image",title:c.title,text:"No Image"})),l.a.createElement(N.a,{sm:12,md:9,className:"details__content__head"},l.a.createElement("h1",{className:"details__content__head__title"},c.title),l.a.createElement("p",{className:"details__content__head__time"},l.a.createElement("span",{className:"details__content__head__time__icon"},l.a.createElement(U.a,null))," ",function(e){var t=e/60,a=Math.floor(t),n=60*(t-a),l=Math.round(n);return"".concat(a,"hr ").concat(l,"min")}(c.runtime)),l.a.createElement("p",{className:"details__content__head__credit"},"Genres ",l.a.createElement("span",null,l.a.createElement(G,{data:c.genres}))),l.a.createElement("p",{className:"details__content__head__credit"},"Directors ",l.a.createElement("span",null,l.a.createElement(J,{type:"director",fullData:_.crew}))),l.a.createElement("p",{className:"details__content__head__credit"},"Written ",l.a.createElement("span",null,l.a.createElement(J,{type:"writer",fullData:_.crew}))))),l.a.createElement("div",{className:"details__content__body"},l.a.createElement(y.a,null,l.a.createElement(N.a,{sm:12,md:3,className:"details__content__body__short"},l.a.createElement("h3",null,"Release date"),l.a.createElement("p",null,S()(c.release_date).format("D MMMM YYYY")),l.a.createElement("h3",null,"Status"),l.a.createElement("p",null,c.status),l.a.createElement("h3",null,"Budget"),l.a.createElement("p",null,c.budget>0?V.a.format(c.budget,{code:"USD",decimalDigits:0}):"N/A"),l.a.createElement("h3",null,"Revenue"),l.a.createElement("p",null,c.revenue>0?V.a.format(c.revenue,{code:"USD",decimalDigits:0}):"N/A"),l.a.createElement("h3",null,"Official website"),l.a.createElement("a",{href:c.homepage,title:c.title,rel:"noopener noreferrer",target:"_blank"},"Link")),l.a.createElement(N.a,{sm:12,md:9,className:"details__content__body__plot"},l.a.createElement("p",{className:"tagline"},c.tagline),l.a.createElement($,{title:"Rating",id:c.imdb_id,imdb:!0,meta:!0,tmdb:c.vote_average}),l.a.createElement(K,{title:"Plot",overview:c.overview})))),l.a.createElement(z,{title:"Cast",data:_.cast,number:12})))):e=l.a.createElement(W,null),l.a.createElement(l.a.Fragment,null,e)},Z=function(e){var t,a=Object(m.g)(),r=Object(n.useState)(null),c=Object(i.a)(r,2),s=c[0],o=c[1],u=Object(n.useState)(null),_=Object(i.a)(u,2),d=_[0],p=_[1],E=P({queryType:"tv",detailsID:a.id}),g=P({queryType:"tv",creditsID:a.id});return Object(n.useEffect)((function(){null!==E.response&&o(E.response),null!==g.response&&p(g.response)}),[E.response,g.response]),t=s&&d?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"details__background",style:{backgroundImage:"url(https://image.tmdb.org/t/p/original".concat(s.backdrop_path,")")}}),l.a.createElement("div",{className:"series details__content"},l.a.createElement(y.a,null,l.a.createElement(N.a,{xs:6,md:3,className:"details__content__poster"},l.a.createElement(O,{src:s.poster_path,width:200,height:300,type:"w200",styled:"details__content__poster__image",title:s.title,text:"No Image"})),l.a.createElement(N.a,{sm:12,md:9,className:"details__content__head"},l.a.createElement("h1",{className:"details__content__head__title"},s.name),l.a.createElement("p",{className:"details__content__head__time"},l.a.createElement("span",{className:"details__content__head__time__icon"},l.a.createElement(U.a,null))," ",s.episode_run_time[0]," min"),l.a.createElement("p",{className:"details__content__head__credit"},"Genres ",l.a.createElement("span",null,l.a.createElement(G,{data:s.genres}))),l.a.createElement("p",{className:"details__content__head__credit"},"Date ",l.a.createElement("span",null,S()(s.first_air_date).format("YYYY")," - ",S()(s.last_air_date).format("YYYY"))),l.a.createElement("p",{className:"details__content__head__credit"},"Creators ",l.a.createElement("span",null,l.a.createElement(J,{data:s.created_by}))))),l.a.createElement("div",{className:"details__content__body"},l.a.createElement(y.a,null,l.a.createElement(N.a,{sm:12,md:3,className:"details__content__body__short"},l.a.createElement("h3",null,"Release date"),l.a.createElement("p",null,s.release_date),l.a.createElement("h3",null,"Status"),l.a.createElement("p",null,s.status),l.a.createElement("h3",null,"Total episodes"),l.a.createElement("p",null,s.number_of_episodes>0?s.number_of_episodes:"N/A"),l.a.createElement("h3",null,"Seasons"),l.a.createElement("p",null,s.number_of_seasons>0?s.number_of_seasons:"N/A"),l.a.createElement("h3",null,"Official website"),l.a.createElement("a",{href:s.homepage,title:s.title,rel:"noopener noreferrer",target:"_blank"},"Link")),l.a.createElement(N.a,{sm:12,md:9,className:"details__content__body__plot"},l.a.createElement($,{title:"Rating",id:s.imdb_id,imdb:!0,meta:!0,tmdb:s.vote_average}),l.a.createElement(K,{tagline:s.tagline,title:"Plot",overview:s.overview}))),l.a.createElement(z,{title:"Cast",data:d.cast,number:12})))):l.a.createElement(W,null),l.a.createElement(l.a.Fragment,null,t)},ee=function(){var e,t=Object(m.g)(),a=Object(n.useState)(null),r=Object(i.a)(a,2),c=r[0],s=r[1],o=P({queryType:"person",detailsID:t.id});return Object(n.useEffect)((function(){null!==o.response&&s(o.response)}),[o.response]),e=c?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"person details__background"}),l.a.createElement("div",{className:"person details__content"},l.a.createElement(y.a,null,l.a.createElement(N.a,{xs:6,md:3,className:"details__content__poster"},l.a.createElement(O,{src:c.profile_path,width:210,height:315,type:"w200",styled:"details__content__poster__image",title:c.name,text:"No Image"})),l.a.createElement(N.a,{sm:12,md:9,className:"details__content__head"},l.a.createElement("h1",{className:"details__content__head__title"},c.name),l.a.createElement("p",{className:"details__content__head__credit"},"Born ",l.a.createElement("span",null,c.birthday?S()(c.birthday).format("MMM D, YYYY"):"N/A"," in ",c.place_of_birth?c.place_of_birth:"N/A")),c.deathday?l.a.createElement("p",{className:"details__content__head__credit"},"Death ",l.a.createElement("span",null,S()(c.deathday).format("MMM D, YYYY"))):null,l.a.createElement("p",{className:"details__content__head__credit"},"Know for ",l.a.createElement("span",null,c.known_for_department)))),l.a.createElement("div",{className:"details__content__body"},l.a.createElement(y.a,null,l.a.createElement(N.a,{sm:12,md:3,className:"details__content__body__short"},l.a.createElement("h3",null,"Official website"),l.a.createElement("p",null,c.homepage?l.a.createElement("a",{href:c.homepage,rel:"noopener noreferrer",target:"_blank"},"Link"):"N/A"),l.a.createElement("h3",null,"Imdb Link"),l.a.createElement("p",null,c.imdb_id?l.a.createElement("a",{href:"https://www.imdb.com/name/".concat(c.imdb_id),rel:"noopener noreferrer",target:"_blank"},"Link"):"N/A")),l.a.createElement(N.a,{sm:12,md:9,className:"details__content__body__plot"},l.a.createElement(K,{title:"Biography",overview:c.biography})))))):l.a.createElement(W,null),l.a.createElement(l.a.Fragment,null,e)},te=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{className:"mainContent__title"},"Oops! Page not found!"),l.a.createElement("div",{className:"error404"},l.a.createElement("div",{className:"glitch","data-text":"404"},"404")))};var ae=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),s=Object(i.a)(c,2),u=s[0],_=s[1],p=Object(n.useState)(null),E=Object(i.a)(p,2),g=E[0],h=E[1],y=Object(n.useState)(null),N=Object(i.a)(y,2),k=N[0],D=N[1],w=Object(m.f)(),O=P({queryType:"movie",listType:"popular",page:1}),j=P({queryType:"movie",listType:"now_playing",page:1}),S=P({queryType:"movie",listType:"upcoming",page:1}),T=P({queryType:"tv",listType:"popular",page:1});return Object(n.useEffect)((function(){null!==O.response&&_(O.response),null!==S.response&&h(S.response),null!==j.response&&r(j.response),null!==T.response&&D(T.response)}),[O.response,S.response,j.response,T.response]),l.a.createElement("div",{className:"App"},l.a.createElement(b,{title:"Movie Search",search:function(e,t){e&&t&&w.push("/search/".concat(t,"/").concat(e))}}),l.a.createElement(o.a,{className:"mainContent"},l.a.createElement(n.Suspense,{fallback:l.a.createElement(v,null)}),l.a.createElement(f,null),l.a.createElement(m.c,null,l.a.createElement(m.a,{path:"/upcoming"},l.a.createElement(Y,{listData:g,title:"Upcoming Movies",loading:S.loading,type:"upcoming"})),l.a.createElement(m.a,{path:"/popular"},l.a.createElement(Y,{listData:u,loading:O.loading,title:"Popular Movies",type:"popular"})),l.a.createElement(m.a,{path:"/now_playing"},l.a.createElement(Y,{listData:a,loading:j.loading,title:"Now Playing Movies",type:"now_playing"})),l.a.createElement(m.a,{path:"/movie_details/:id",component:X}),l.a.createElement(m.a,{path:"/series_details/:id",component:Z}),l.a.createElement(m.a,{path:"/person_details/:id",component:ee}),l.a.createElement(m.a,{exact:!0,path:"/"},l.a.createElement(x,{upcomingMoviesData:g,popularMoviesData:u,nowPlayingMoviesData:a,popularSeriesData:k,number:10})),l.a.createElement(m.a,{path:"/search/:type/:query"},l.a.createElement(L,{page:1,title:"Search",type:"search"})),l.a.createElement(m.a,{component:te}))),l.a.createElement("footer",null,l.a.createElement("p",null,l.a.createElement(d.b,null)," ",l.a.createElement(d.a,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(108);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(s.a,null,l.a.createElement(ae,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},65:function(e,t,a){e.exports=a(109)}},[[65,1,2]]]);
//# sourceMappingURL=main.b952c9c5.chunk.js.map