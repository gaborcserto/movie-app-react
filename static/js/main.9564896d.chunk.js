(this["webpackJsonpmovie-app-react"]=this["webpackJsonpmovie-app-react"]||[]).push([[0],{114:function(e,a,t){e.exports=t(274)},273:function(e,a,t){},274:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(22),c=t.n(r),s=t(8),i=t(7),m=t(9),o=t(289),_=t(294),u=t(290),d=t(29),p=function(e){var a=Object(n.useState)(""),t=Object(i.a)(a,2),r=t[0],c=t[1],s=Object(n.useState)("movie"),m=Object(i.a)(s,2),p=m[0],E=m[1];return l.a.createElement(o.a,{className:"SearchBar"},l.a.createElement(_.a,{onChange:function(e){E(e.target.value)},className:"SearchBar__select",as:"select",value:p},l.a.createElement("option",{value:"movie"},"Movie"),l.a.createElement("option",{value:"tv"},"Series"),l.a.createElement("option",{value:"person"},"Person")),l.a.createElement(_.a,{placeholder:"Search...",className:"SearchBar__input",value:r,onChange:function(e){c(e.target.value)}}),l.a.createElement(u.a,{onClick:function(a){a.preventDefault(),e.search(r,p)},className:"SearchBar__button",variant:"danger"},l.a.createElement(d.c,null)))},E=t(293),g=t(295),h=t(105),b=Object(m.h)((function(e){var a="",t=!1;/movie_details/.test(document.URL)&&(a=" details",t=!0),/person_details/.test(document.URL)&&(a=" details",t=!0),/series_details/.test(document.URL)&&(a=" details",t=!0);return l.a.createElement("header",{className:"header".concat(a)},l.a.createElement(E.a,{className:"header__navBar",sticky:"top",expand:"md",bg:"transparent",variant:"dark"},l.a.createElement(s.c,{className:"navbar-brand",variant:"danger",exact:!0,to:"/"},l.a.createElement("span",{className:"navbar-brand__logo"},l.a.createElement(h.a,null)),e.title),l.a.createElement(E.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(E.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(g.a,{defaultActiveKey:"/",activeKey:"active",className:"mr-auto"},l.a.createElement(s.c,{activeClassName:"active",className:"nav-link",exact:!0,to:"/"},"Home"),l.a.createElement(s.c,{activeClassName:"active",className:"nav-link",exact:!0,to:"/now_playing"},"Now Playing Movies"),l.a.createElement(s.c,{activeClassName:"active",className:"nav-link",exact:!0,to:"/popular"},"Popular Movies"),l.a.createElement(s.c,{activeClassName:"active",className:"nav-link",to:"/upcoming"},"Upcoming Movies")),t?l.a.createElement(u.a,{variant:"danger",className:"btnBack ripple",onClick:function(){window.history.back()}},"\u2770\u2770 Back "):null)),t?null:l.a.createElement(p,{className:"header__search",search:e.search}))})),v=function(){return l.a.createElement("div",{className:"loading"},l.a.createElement("div",{className:"loading__inner"},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null)))};var f=Object(m.h)((function(e){var a=e.history;return Object(n.useEffect)((function(){var e=a.listen((function(){window.scrollTo(0,0)}));return function(){e()}}),[a]),null})),N=t(291),y=t(292),k=t(297),w=t(46),D=t(109),j=function(e){var a=e.title,t=Object(w.generateCustomPlaceholderURL)(e.width,e.height,{textColor:"#ffffff",text:e.text});return e.alt&&(a=e.alt),null!==e.src?l.a.createElement(D.Img,{className:e.styled,src:"https://image.tmdb.org/t/p/".concat(e.type).concat(e.src),placeholderSrc:"https://image.tmdb.org/t/p/w200".concat(e.src),alt:a,title:e.title}):l.a.createElement("img",{className:e.styled,src:t,alt:a,title:e.title})},O=t(17),S=t.n(O),x=function(e){var a=e.movieTitle,t="/movie_details/".concat(e.movieID),n=e.releaseDate;return e.seriesTitle&&(a=e.seriesTitle,t="/series_details/".concat(e.movieID),n=e.fisrtAirDate),l.a.createElement(k.a.Item,{className:"mainContent__list__item"},l.a.createElement(s.b,{to:t},l.a.createElement("div",{className:"mainContent__list__item__image"},l.a.createElement(j,{src:e.img,width:100,height:100,type:"w200",title:a,text:"Img"})),l.a.createElement("div",{className:"mainContent__list__item__title"},a,l.a.createElement("span",{className:"mainContent__list__item__title__date"},S()(n).format("YYYY")))))},T=function(e){var a,t=e.data,n=e.styled,r=e.number,c=void 0===r?0:r;return a=t?c>0?t.slice(0,c).map((function(e,a){return l.a.createElement(x,{key:a,img:e.poster_path,movieID:e.id,movieTitle:e.title,releaseDate:e.release_date,fisrtAirDate:e.first_air_date,seriesTitle:e.original_name})})):t.map((function(e,a){return l.a.createElement(x,{key:a,img:e.poster_path,movieID:e.id,movieTitle:e.title,releaseDate:e.release_date,fisrtAirDate:e.first_air_date,seriesTitle:e.original_name})})):l.a.createElement(v,null),l.a.createElement(k.a,{variant:"flush",className:n},a)},C=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(N.a,null,l.a.createElement(y.a,{sm:12,md:6},l.a.createElement("h2",{className:"mainContent__title"},"Upcoming Movies"),e.upcomingMoviesData?l.a.createElement(T,{styled:"mainContent__list",number:e.number,data:e.upcomingMoviesData.results}):l.a.createElement(v,null)),l.a.createElement(y.a,{sm:12,md:6},l.a.createElement("h2",{className:"mainContent__title"},"Now Playing Movies"),e.nowPlayingMoviesData?l.a.createElement(T,{styled:"mainContent__list",number:e.number,data:e.nowPlayingMoviesData.results}):l.a.createElement(v,null))),l.a.createElement(N.a,null,l.a.createElement(y.a,{sm:12,md:6},l.a.createElement("h2",{className:"mainContent__title"},"Popular Series"),e.popularSeriesData?l.a.createElement(T,{styled:"mainContent__list",number:e.number,data:e.popularSeriesData.results}):l.a.createElement(v,null)),l.a.createElement(y.a,{sm:12,md:6},l.a.createElement("h2",{className:"mainContent__title"},"Popular Movies"),e.popularMoviesData?l.a.createElement(T,{styled:"mainContent__list",number:e.number,data:e.popularMoviesData.results}):l.a.createElement(v,null))))},M=t(296),I=function(e){var a=e.card,t=e.type,n="/movie_details/".concat(a.id),r=a.title,c=a.poster_path;return"tv"===t?(r=a.name,n="/series_details/".concat(a.id)):"person"===t&&(r=a.name,n="/person_details/".concat(a.id),c=a.profile_path),l.a.createElement(s.b,{className:"Card",to:n},l.a.createElement(M.a,{className:"movieCard",bg:"transparent",text:"dark"},l.a.createElement(j,{styled:"card-img-top movieCard__img",src:c,width:200,height:300,type:"w500",alt:"The movie titled: ".concat(r),title:r,text:"No Image"}),l.a.createElement(M.a.Body,{className:"movieCard__body"},l.a.createElement(M.a.Text,{className:"movieCard__body__text"},r))))},Y=function(e){var a;return a=e.loading||!e.listData?l.a.createElement(v,null):e.listData.results.map((function(e,a){return l.a.createElement(y.a,{className:"searchResult__col",key:"".concat(a,"-").concat(e.id),xs:6,md:4,lg:3},l.a.createElement(I,{key:a,card:e}))})),l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{className:"mainContent__title"},e.title),l.a.createElement(N.a,null,a))},q=t(26),F=t.n(q),R=t(110),A=t(111),P=t.n(A),B=function(e){var a=Object(n.useState)(null),t=Object(i.a)(a,2),l=t[0],r=t[1],c=Object(n.useState)(null),s=Object(i.a)(c,2),m=s[0],o=s[1],_=Object(n.useState)(!1),u=Object(i.a)(_,2),d=u[0],p=u[1],E=null;return e.imdbID?E="".concat("https://www.omdbapi.com/","?apikey=").concat("f939fc5e","&i=").concat(e.imdbID):e.detailsID?E="".concat("https://api.themoviedb.org/3/").concat(e.queryType,"/").concat(e.detailsID,"?api_key=").concat("6e28c94e1391da07f513a6acbb34fa23","&append_to_response=videos,images,credits"):e.creditsID?E="".concat("https://api.themoviedb.org/3/").concat(e.queryType,"/").concat(e.creditsID,"/combined_credits?api_key=").concat("6e28c94e1391da07f513a6acbb34fa23"):e.query?E="".concat("https://api.themoviedb.org/3/","search/").concat(e.queryType,"?api_key=").concat("6e28c94e1391da07f513a6acbb34fa23","&query=").concat(e.query,"&page=").concat(e.page):e.queryType&&e.listType&&(E="".concat("https://api.themoviedb.org/3/").concat(e.queryType,"/").concat(e.listType,"?api_key=").concat("6e28c94e1391da07f513a6acbb34fa23","&page=").concat(e.page)),Object(n.useEffect)((function(){null!==E&&function(){var e=Object(R.a)(F.a.mark((function e(){var a;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.prev=1,e.next=4,P.a.get(E);case 4:a=e.sent,r(a.data),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),o(e.t0),console.error("%cData Fetching Error:","font-size: 18px",e.t0);case 12:return e.prev=12,p(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,8,12,15]])})));return function(){return e.apply(this,arguments)}}()()}),[E]),{response:l,error:m,loading:d}},L=function(e){var a,t=Object(n.useState)(null),r=Object(i.a)(t,2),c=r[0],s=r[1],o=Object(n.useState)(0),_=Object(i.a)(o,2),u=_[0],d=_[1],p=Object(m.g)(),E=B({queryType:p.type,query:p.query,page:e.page});return Object(n.useEffect)((function(){null!==E.response&&(s(E.response),d(E.response.total_results))}),[E.response]),a=E.loading||!E.response?l.a.createElement(v,null):c.results.map((function(e,a){return l.a.createElement(y.a,{className:"searchResult__col",key:"".concat(a,"-").concat(e.id),sm:12,md:6,lg:3},l.a.createElement(I,{key:a,card:e,type:p.type}))})),l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{className:"mainContent__title"},e.title,": ",p.query," "),l.a.createElement("h3",null,"Total results: ",u),l.a.createElement(N.a,null,a))},U=t(47),W=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{className:"mainContent__title"},"Details"),l.a.createElement(v,null))},K=function(e){return l.a.createElement(l.a.Fragment,null,e.tagline?l.a.createElement("p",{className:"tagline"},e.tagline):null,l.a.createElement("h2",{className:"title"},e.title),l.a.createElement("div",{className:"text"},e.overview))},G=function(e){var a="N/A";return e.data&&(a=e.data.map((function(e,a){return l.a.createElement("span",{className:"genres badge badge-pill badge-dark",key:a},e.name)}))),l.a.createElement(l.a.Fragment,null,a)},J=function(e){var a="N/A",t=e.data,n=function(e){return Array.from(new Set(e.map((function(e){return e.id})))).map((function(a){return e.find((function(e){return e.id===a}))}))};return"director"===e.type&&(t=n(t=e.fullData.filter((function(e){return"Directing"===e.department&&"Director"===e.job})))),"writer"===e.type&&(t=n(t=e.fullData.filter((function(e){return"Writing"===e.department&&("Screenplay"===e.job||"Writer"===e.job)})))),t&&(a=t.map((function(e,a){return l.a.createElement(s.b,{className:"person-link",key:a,to:"/person_details/".concat(e.id)},e.name)}))),l.a.createElement(l.a.Fragment,null,a)},V=function(e){var a="N/A",t=function(e,a){return l.a.createElement(y.a,{xs:6,md:3,lg:2,key:a,className:"cast__col"},l.a.createElement(s.b,{className:"cast__link",to:"/person_details/".concat(e.id)},l.a.createElement("div",{className:"cast__link__data"},l.a.createElement(j,{src:e.profile_path,width:350,height:520,type:"w200",styled:"cast__link__data__image",title:e.name,text:"No Image"}),l.a.createElement("p",{className:"cast__link__data__name"},e.name),l.a.createElement("small",{className:"cast__link__data__character"},e.character))))};return e.data&&(a=e.number?e.data.slice(0,e.number).map((function(e,a){return t(e,a)})):e.data.map((function(e,a){return t(e,a)}))),l.a.createElement("div",{className:"cast"},l.a.createElement("h2",{className:"cast__title"},e.title),l.a.createElement(N.a,null,a))},z=function(e){var a=Object(n.useState)(0),t=Object(i.a)(a,2),r=t[0],c=t[1],s="0 0 38 38",m="19",o="19",_="15.91549430918954",u=r,d=e.percentage;e.decimal&&(u=r/10,d=10*e.percentage);var p=d/e.speed,E=Object(n.useCallback)((function(){(d>0||r<d)&&setTimeout((function(){c(r+1)}),p)}),[r,d,p]);return Object(n.useEffect)((function(){u<e.percentage&&E()}),[u,e.percentage,E]),l.a.createElement(l.a.Fragment,null,l.a.createElement("figure",{className:"circleRating"},l.a.createElement("svg",{viewBox:s},l.a.createElement("circle",{className:"circleRating__donut-ring",cx:m,cy:o,r:_,fill:"transparent",stroke:"ghostwhite",strokeWidth:1,strokeDasharray:e.trailSpaced?1:0}),l.a.createElement("circle",{className:"circleRating__donut-segment",cx:m,cy:o,r:_,fill:"transparent",stroke:"black",strokeWidth:1,strokeDasharray:"".concat(r," ").concat(100-r),strokeDashoffset:25})),l.a.createElement("figcaption",{className:"circleRating__chart"},l.a.createElement("p",{className:"circleRating__chart__number"},u))),l.a.createElement("p",{className:"circleRating__label"},e.innerText))},H=function(e){var a,t,r=Object(n.useState)(null),c=Object(i.a)(r,2),s=c[0],m=c[1],o=null,_=B({imdbID:e.id,page:1});return Object(n.useEffect)((function(){null!==_.response&&m(_.response)}),[_.response]),e.imdb&&s&&(a=s.imdbRating>0?l.a.createElement(y.a,{xs:6,sm:4,className:"imdb"},l.a.createElement(z,{innerText:"IMDB",percentage:s.imdbRating,trailSpaced:!1,speed:10,decimal:!0})):null),e.meta&&s&&(t=s.Metascore>0?l.a.createElement(y.a,{xs:6,sm:4,className:"metascore"},l.a.createElement(z,{innerText:"Metascore",percentage:s.Metascore,trailSpaced:!1,speed:10})):null),e.tmdb&&(o=l.a.createElement(y.a,{xs:6,sm:4,className:"tmdb"},l.a.createElement(z,{innerText:"The Movie Database",percentage:e.tmdb,trailSpaced:!1,speed:10,decimal:!0}))),l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{className:"title"},e.title),l.a.createElement(N.a,{className:"rating"},a,t,o))},$=t(65),Q=t.n($),X=t(66),Z=t(112),ee=t.n(Z),ae=function(e){var a,t=function(e){return e.preventDefault()},n=function(e){return e.length<3?{760:{items:2}}:e.length<2?{0:{items:1}}:{760:{items:2},1020:{items:3}}},r=null;return e.images&&e.images.length>0?(a=n(e.images),r=e.images.map((function(a,n){return l.a.createElement("a",{href:"https://image.tmdb.org/t/p/original".concat(a.file_path),key:n,"data-attribute":"SRL"},l.a.createElement("img",{onDragStart:t,className:"item carousel__item",src:"https://image.tmdb.org/t/p/w500".concat(a.file_path),alt:"".concat(e.alt,"-").concat(n)}))})),l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,e.title),l.a.createElement(X.b,null,l.a.createElement(X.a,null,l.a.createElement(Q.a,{touchTrackingEnabled:!0,dotsDisabled:!0,responsive:a,mouseTrackingEnabled:!0},r))))):e.videos&&e.videos.length>0||e.credits&&e.credits.length>0?(e.videos?(a=n(e.videos),r=e.videos.map((function(e,a){return l.a.createElement("div",{className:"item carousel__item video",key:a},l.a.createElement(ee.a,{className:"react-player",url:"".concat("https://cors-anywhere.herokuapp.com/","https://www.youtube.com/watch?v=").concat(e.key),width:"100%",height:"100%"}))}))):(a={760:{items:3},1020:{items:4}},r=e.credits.map((function(e,a){return l.a.createElement("div",{className:"item carousel__item cast",key:a},l.a.createElement(s.b,{className:"cast__link",to:(r=e.media_type,c=e.id,"tv"===r?"/series_details/".concat(c):"/".concat(r,"_details/").concat(c))},l.a.createElement("div",{className:"cast__link__data"},l.a.createElement("img",{onDragStart:t,className:"cast__link__data__image",src:(n=e.poster_path,n?"https://image.tmdb.org/t/p/w500".concat(n):Object(w.generateCustomPlaceholderURL)(350,520,{textColor:"#ffffff",text:"No Image"})),title:e.original_title?e.original_title:e.original_name,alt:e.original_title?e.original_title:e.original_name}),l.a.createElement("div",{className:"cast__link__data__texts"},l.a.createElement("p",{className:"cast__link__data__name"},e.original_title?e.original_title:e.original_name),e.character?l.a.createElement("small",{className:"cast__link__data__character"},e.character):null,e.job?l.a.createElement("small",{className:"cast__link__data__job"},e.job):null))));var n,r,c}))),l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,e.title),l.a.createElement(Q.a,{touchTrackingEnabled:!0,dotsDisabled:!0,responsive:a,mouseTrackingEnabled:!0},r))):null},te=t(67),ne=t.n(te),le=function(){var e,a=Object(m.g)(),t=Object(n.useState)(null),r=Object(i.a)(t,2),c=r[0],s=r[1],o=B({queryType:"movie",detailsID:a.id});Object(n.useEffect)((function(){null!==o.response&&s(o.response)}),[o.response]);var _=null;return c?(null!==c.backdrop_path&&(_={backgroundImage:"url(https://image.tmdb.org/t/p/original".concat(c.backdrop_path,")")}),e=l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"details__background",style:_}),l.a.createElement("div",{className:"movie details__content"},l.a.createElement(N.a,null,l.a.createElement(y.a,{xs:6,md:3,className:"details__content__poster"},l.a.createElement(j,{src:c.poster_path,width:200,height:300,type:"w200",styled:"details__content__poster__image",title:c.title,text:"No Image"})),l.a.createElement(y.a,{sm:12,md:9,className:"details__content__head"},l.a.createElement("h1",{className:"details__content__head__title"},c.title),l.a.createElement("p",{className:"details__content__head__time"},l.a.createElement("span",{className:"details__content__head__time__icon"},l.a.createElement(U.a,null))," ",function(e){var a=e/60,t=Math.floor(a),n=60*(a-t),l=Math.round(n);return"".concat(t,"hr ").concat(l,"min")}(c.runtime)),l.a.createElement("p",{className:"details__content__head__credit"},"Genres ",l.a.createElement("span",null,l.a.createElement(G,{data:c.genres}))),l.a.createElement("p",{className:"details__content__head__credit"},"Directors ",l.a.createElement("span",null,l.a.createElement(J,{type:"director",fullData:c.credits.crew}))),l.a.createElement("p",{className:"details__content__head__credit"},"Written ",l.a.createElement("span",null,l.a.createElement(J,{type:"writer",fullData:c.credits.crew}))))),l.a.createElement("div",{className:"details__content__body"},l.a.createElement(N.a,null,l.a.createElement(y.a,{sm:12,md:3,className:"details__content__body__short"},l.a.createElement("h3",null,"Release date"),l.a.createElement("p",null,S()(c.release_date).format("D MMMM YYYY")),l.a.createElement("h3",null,"Status"),l.a.createElement("p",null,c.status),l.a.createElement("h3",null,"Budget"),l.a.createElement("p",null,c.budget>0?ne.a.format(c.budget,{code:"USD",decimalDigits:0}):"N/A"),l.a.createElement("h3",null,"Revenue"),l.a.createElement("p",null,c.revenue>0?ne.a.format(c.revenue,{code:"USD",decimalDigits:0}):"N/A"),l.a.createElement("h3",null,"Official website"),l.a.createElement("a",{href:c.homepage,title:c.title,rel:"noopener noreferrer",target:"_blank"},"Link")),l.a.createElement(y.a,{sm:12,md:9,className:"details__content__body__plot"},l.a.createElement("p",{className:"tagline"},c.tagline),l.a.createElement(H,{title:"Rating",id:c.imdb_id,imdb:!0,meta:!0,tmdb:c.vote_average}),l.a.createElement(K,{title:"Plot",overview:c.overview}),l.a.createElement(ae,{className:"carousel",alt:c.title,title:"Photos",images:c.images.backdrops}),l.a.createElement(ae,{className:"carousel",alt:c.title,title:"Videos",videos:c.videos.results}),l.a.createElement(V,{title:"Cast",data:c.credits.cast,number:12}))))))):e=l.a.createElement(W,null),l.a.createElement(l.a.Fragment,null,e)},re=function(){var e,a=Object(m.g)(),t=Object(n.useState)(null),r=Object(i.a)(t,2),c=r[0],s=r[1],o=B({queryType:"tv",detailsID:a.id});Object(n.useEffect)((function(){null!==o.response&&s(o.response)}),[o.response]);var _=null;return c?(null!==c.backdrop_path&&(_={backgroundImage:"url(https://image.tmdb.org/t/p/original".concat(c.backdrop_path,")")}),e=l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"details__background",style:_}),l.a.createElement("div",{className:"series details__content"},l.a.createElement(N.a,null,l.a.createElement(y.a,{xs:6,md:3,className:"details__content__poster"},l.a.createElement(j,{src:c.poster_path,width:200,height:300,type:"w200",styled:"details__content__poster__image",title:c.title,text:"No Image"})),l.a.createElement(y.a,{sm:12,md:9,className:"details__content__head"},l.a.createElement("h1",{className:"details__content__head__title"},c.name),l.a.createElement("p",{className:"details__content__head__time"},l.a.createElement("span",{className:"details__content__head__time__icon"},l.a.createElement(U.a,null))," ",c.episode_run_time[0]," min"),l.a.createElement("p",{className:"details__content__head__credit"},"Genres ",l.a.createElement("span",null,l.a.createElement(G,{data:c.genres}))),l.a.createElement("p",{className:"details__content__head__credit"},"Date ",l.a.createElement("span",null,S()(c.first_air_date).format("YYYY")," - ",S()(c.last_air_date).format("YYYY"))),l.a.createElement("p",{className:"details__content__head__credit"},"Creators ",l.a.createElement("span",null,l.a.createElement(J,{data:c.created_by}))))),l.a.createElement("div",{className:"details__content__body"},l.a.createElement(N.a,null,l.a.createElement(y.a,{sm:12,md:3,className:"details__content__body__short"},l.a.createElement("h3",null,"Release date"),l.a.createElement("p",null,c.release_date),l.a.createElement("h3",null,"Status"),l.a.createElement("p",null,c.status),l.a.createElement("h3",null,"Total episodes"),l.a.createElement("p",null,c.number_of_episodes>0?c.number_of_episodes:"N/A"),l.a.createElement("h3",null,"Seasons"),l.a.createElement("p",null,c.number_of_seasons>0?c.number_of_seasons:"N/A"),l.a.createElement("h3",null,"Official website"),l.a.createElement("a",{href:c.homepage,title:c.title,rel:"noopener noreferrer",target:"_blank"},"Link")),l.a.createElement(y.a,{sm:12,md:9,className:"details__content__body__plot"},l.a.createElement(H,{title:"Rating",id:c.imdb_id,imdb:!0,meta:!0,tmdb:c.vote_average}),l.a.createElement(K,{tagline:c.tagline,title:"Plot",overview:c.overview}),l.a.createElement(ae,{type:"image",className:"carousel",alt:c.name,title:"Photos",images:c.images.backdrops}),l.a.createElement(ae,{className:"carousel",title:"Videos",videos:c.videos.results}),l.a.createElement(V,{title:"Cast",data:c.credits.cast,number:12}))))))):e=l.a.createElement(W,null),l.a.createElement(l.a.Fragment,null,e)},ce=function(){var e,a=Object(m.g)(),t=Object(n.useState)(null),r=Object(i.a)(t,2),c=r[0],s=r[1],o=Object(n.useState)(null),_=Object(i.a)(o,2),u=_[0],d=_[1],p=B({queryType:"person",detailsID:a.id}),E=B({queryType:"person",creditsID:a.id});return Object(n.useEffect)((function(){null!==p.response&&s(p.response),null!==E.response&&d(E.response)}),[p.response,E.response]),e=c&&u?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"person details__background"}),l.a.createElement("div",{className:"person details__content"},l.a.createElement(N.a,null,l.a.createElement(y.a,{xs:6,md:3,className:"details__content__poster"},l.a.createElement(j,{src:c.profile_path,width:210,height:315,type:"w200",styled:"details__content__poster__image",title:c.name,text:"No Image"})),l.a.createElement(y.a,{sm:12,md:9,className:"details__content__head"},l.a.createElement("h1",{className:"details__content__head__title"},c.name),l.a.createElement("p",{className:"details__content__head__credit"},"Born ",l.a.createElement("span",null,c.birthday?S()(c.birthday).format("MMM D, YYYY"):"N/A"," in ",c.place_of_birth?c.place_of_birth:"N/A")),c.deathday?l.a.createElement("p",{className:"details__content__head__credit"},"Death ",l.a.createElement("span",null,S()(c.deathday).format("MMM D, YYYY"))):null,l.a.createElement("p",{className:"details__content__head__credit"},"Know for ",l.a.createElement("span",null,c.known_for_department)))),l.a.createElement("div",{className:"details__content__body"},l.a.createElement(N.a,null,l.a.createElement(y.a,{sm:12,md:3,className:"details__content__body__short"},l.a.createElement("h3",null,"Official website"),l.a.createElement("p",null,c.homepage?l.a.createElement("a",{href:c.homepage,rel:"noopener noreferrer",target:"_blank"},"Link"):"N/A"),l.a.createElement("h3",null,"Imdb Link"),l.a.createElement("p",null,c.imdb_id?l.a.createElement("a",{href:"https://www.imdb.com/name/".concat(c.imdb_id),rel:"noopener noreferrer",target:"_blank"},"Link"):"N/A")),l.a.createElement(y.a,{sm:12,md:9,className:"details__content__body__plot"},l.a.createElement(K,{title:"Biography",overview:c.biography}),l.a.createElement(ae,{className:"carousel",title:"Filmography (Actor)",credits:u.cast}),l.a.createElement(ae,{className:"carousel",title:"Filmography (crew)",credits:u.crew})))))):l.a.createElement(W,null),l.a.createElement(l.a.Fragment,null,e)},se=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{className:"mainContent__title"},"Oops! Page not found!"),l.a.createElement("div",{className:"error404"},l.a.createElement("div",{className:"glitch","data-text":"404"},"404")))};var ie=function(){var e=Object(n.useState)(null),a=Object(i.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(null),s=Object(i.a)(c,2),_=s[0],u=s[1],p=Object(n.useState)(null),E=Object(i.a)(p,2),g=E[0],h=E[1],N=Object(n.useState)(null),y=Object(i.a)(N,2),k=y[0],w=y[1],D=Object(m.f)(),j=B({queryType:"movie",listType:"popular",page:1}),O=B({queryType:"movie",listType:"now_playing",page:1}),S=B({queryType:"movie",listType:"upcoming",page:1}),x=B({queryType:"tv",listType:"popular",page:1});return Object(n.useEffect)((function(){null!==j.response&&u(j.response),null!==S.response&&h(S.response),null!==O.response&&r(O.response),null!==x.response&&w(x.response)}),[j.response,S.response,O.response,x.response]),l.a.createElement("div",{className:"App"},l.a.createElement(b,{title:"Movie Search",search:function(e,a){e&&a&&D.push("/search/".concat(a,"/").concat(e))}}),l.a.createElement(o.a,{className:"mainContent"},l.a.createElement(n.Suspense,{fallback:l.a.createElement(v,null)}),l.a.createElement(f,null),l.a.createElement(m.c,null,l.a.createElement(m.a,{path:"/upcoming"},l.a.createElement(Y,{listData:g,title:"Upcoming Movies",loading:S.loading,type:"upcoming"})),l.a.createElement(m.a,{path:"/popular"},l.a.createElement(Y,{listData:_,loading:j.loading,title:"Popular Movies",type:"popular"})),l.a.createElement(m.a,{path:"/now_playing"},l.a.createElement(Y,{listData:t,loading:O.loading,title:"Now Playing Movies",type:"now_playing"})),l.a.createElement(m.a,{path:"/movie_details/:id",component:le}),l.a.createElement(m.a,{path:"/series_details/:id",component:re}),l.a.createElement(m.a,{path:"/person_details/:id",component:ce}),l.a.createElement(m.a,{exact:!0,path:"/"},l.a.createElement(C,{upcomingMoviesData:g,popularMoviesData:_,nowPlayingMoviesData:t,popularSeriesData:k,number:10})),l.a.createElement(m.a,{path:"/search/:type/:query"},l.a.createElement(L,{page:1,title:"Search",type:"search"})),l.a.createElement(m.a,{component:se}))),l.a.createElement("footer",null,l.a.createElement("p",null,l.a.createElement(d.b,null)," ",l.a.createElement(d.a,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(273);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(s.a,null,l.a.createElement(ie,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[114,13,14]]]);
//# sourceMappingURL=main.9564896d.chunk.js.map