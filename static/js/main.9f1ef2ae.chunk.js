(this["webpackJsonpmovie-app-react"]=this["webpackJsonpmovie-app-react"]||[]).push([[0],{108:function(e,a,t){},109:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(21),c=t.n(r),s=t(8),i=t(6),m=t(7),o=t(111),_=t(116),u=t(112),d=t(22),p=function(e){var a=Object(n.useState)(""),t=Object(i.a)(a,2),r=t[0],c=t[1],s=Object(n.useState)("movie"),m=Object(i.a)(s,2),p=m[0],E=m[1];return l.a.createElement(o.a,{className:"SearchBar"},l.a.createElement(_.a,{onChange:function(e){E(e.target.value)},className:"SearchBar__select",as:"select",value:p},l.a.createElement("option",{value:"movie"},"Movie"),l.a.createElement("option",{value:"tv"},"Tv"),l.a.createElement("option",{value:"person"},"Person")),l.a.createElement(_.a,{placeholder:"Search...",className:"SearchBar__input",value:r,onChange:function(e){c(e.target.value)}}),l.a.createElement(u.a,{onClick:function(a){a.preventDefault(),e.search(r,p)},className:"SearchBar__button",variant:"danger"},l.a.createElement(d.c,null)))},E=t(115),h=t(117),g=t(56),v=Object(m.h)((function(e){var a="",t=!1;/movie_details/.test(document.URL)&&(a=" details",t=!0),/person_details/.test(document.URL)&&(a=" details",t=!0),/series_details/.test(document.URL)&&(a=" details",t=!0);return l.a.createElement("header",{className:"header".concat(a)},l.a.createElement(E.a,{className:"header__navBar",sticky:"top",expand:"md",bg:"transparent",variant:"dark"},l.a.createElement(s.c,{className:"navbar-brand",variant:"danger",exact:!0,to:"/"},l.a.createElement("span",{className:"navbar-brand__logo"},l.a.createElement(g.a,null)),e.title),l.a.createElement(E.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(E.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(h.a,{defaultActiveKey:"/",activeKey:"active",className:"mr-auto"},l.a.createElement(s.c,{activeClassName:"active",className:"nav-link",exact:!0,to:"/"},"Home"),l.a.createElement(s.c,{activeClassName:"active",className:"nav-link",exact:!0,to:"/now_playing"},"Now Playing Movies"),l.a.createElement(s.c,{activeClassName:"active",className:"nav-link",exact:!0,to:"/popular"},"Popular Movies"),l.a.createElement(s.c,{activeClassName:"active",className:"nav-link",to:"/upcoming"},"Upcoming Movies")),t?l.a.createElement(u.a,{variant:"danger",className:"btnBack ripple",onClick:function(){window.history.back()}},"\u2770\u2770 Back "):null)),t?null:l.a.createElement(p,{className:"header__search",search:e.search}))})),b=function(){return l.a.createElement("div",{className:"loading"},l.a.createElement("div",{className:"loading__inner"},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null)))},f=t(113),y=t(114),N=t(119),k=t(60),w=t(61),D=function(e){var a=e.title,t=Object(k.generateCustomPlaceholderURL)(e.width,e.height,{textColor:"#ffffff",text:e.text});return e.alt&&(a=e.alt),null!==e.src?l.a.createElement(w.Img,{className:e.styled,src:"https://image.tmdb.org/t/p/".concat(e.type).concat(e.src),placeholderSrc:"https://image.tmdb.org/t/p/w200".concat(e.src),alt:a,title:e.title}):l.a.createElement("img",{className:e.styled,src:t,alt:a,title:e.title})},O=t(17),j=t.n(O),C=function(e){var a=e.movieTitle,t="/movie_details/".concat(e.movieID),n=e.releaseDate;return e.seriesTitle&&(a=e.seriesTitle,t="/series_details/".concat(e.movieID),n=e.fisrtAirDate),l.a.createElement(N.a.Item,{className:"mainContent__list__item"},l.a.createElement(s.b,{to:t},l.a.createElement("div",{className:"mainContent__list__item__image"},l.a.createElement(D,{src:e.img,width:100,height:100,type:"w200",title:a,text:"Img"})),l.a.createElement("div",{className:"mainContent__list__item__title"},a,l.a.createElement("span",{className:"mainContent__list__item__title__date"},j()(n).format("YYYY")))))},S=function(e){var a,t=e.data,n=e.styled,r=e.number,c=void 0===r?0:r;return a=t?c>0?t.slice(0,c).map((function(e,a){return l.a.createElement(C,{key:a,img:e.poster_path,movieID:e.id,movieTitle:e.title,releaseDate:e.release_date,fisrtAirDate:e.first_air_date,seriesTitle:e.original_name})})):t.map((function(e,a){return l.a.createElement(C,{key:a,img:e.poster_path,movieID:e.id,movieTitle:e.title,releaseDate:e.release_date,fisrtAirDate:e.first_air_date,seriesTitle:e.original_name})})):l.a.createElement(b,null),l.a.createElement(N.a,{variant:"flush",className:n},a)},M=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(f.a,null,l.a.createElement(y.a,{sm:12,md:6},l.a.createElement("h2",{className:"mainContent__title"},"Upcoming Movies"),e.upcomingMoviesData?l.a.createElement(S,{styled:"mainContent__list",number:e.number,data:e.upcomingMoviesData.results}):l.a.createElement(b,null)),l.a.createElement(y.a,{sm:12,md:6},l.a.createElement("h2",{className:"mainContent__title"},"Now Playing Movies"),e.nowPlayingMoviesData?l.a.createElement(S,{styled:"mainContent__list",number:e.number,data:e.nowPlayingMoviesData.results}):l.a.createElement(b,null))),l.a.createElement(f.a,null,l.a.createElement(y.a,{sm:12,md:6},l.a.createElement("h2",{className:"mainContent__title"},"Popular Series"),e.popularSeriesData?l.a.createElement(S,{styled:"mainContent__list",number:e.number,data:e.popularSeriesData.results}):l.a.createElement(b,null)),l.a.createElement(y.a,{sm:12,md:6},l.a.createElement("h2",{className:"mainContent__title"},"Popular Movies"),e.popularMoviesData?l.a.createElement(S,{styled:"mainContent__list",number:e.number,data:e.popularMoviesData.results}):l.a.createElement(b,null))))},T=t(118),x=function(e){var a=e.card,t=e.type,n="/movie_details/".concat(a.id),r=a.title,c=a.poster_path;return"tv"===t?(r=a.name,n="/series_details/".concat(a.id)):"person"===t&&(r=a.name,n="/person_details/".concat(a.id),c=a.profile_path),l.a.createElement(s.b,{className:"Card",to:n},l.a.createElement(T.a,{className:"movieCard",bg:"transparent",text:"dark"},l.a.createElement(D,{styled:"card-img-top movieCard__img",src:c,width:200,height:300,type:"w500",alt:"The movie titled: ".concat(r),title:r,text:"No Image"}),l.a.createElement(T.a.Body,{className:"movieCard__body"},l.a.createElement(T.a.Text,{className:"movieCard__body__text"},r))))},I=function(e){var a;return a=e.loading||!e.listData?l.a.createElement(b,null):e.listData.results.map((function(e,a){return l.a.createElement(y.a,{className:"searchResult__col",key:"".concat(a,"-").concat(e.id),xs:6,md:4,lg:3},l.a.createElement(x,{key:a,card:e}))})),l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{className:"mainContent__title"},e.title),l.a.createElement(f.a,null,a))},Y=t(38),q=t.n(Y),A=t(62),F=t(63),P=t.n(F),B=function(e){var a,t=Object(n.useState)(null),l=Object(i.a)(t,2),r=l[0],c=l[1],s=Object(n.useState)(null),m=Object(i.a)(s,2),o=m[0],_=m[1],u=Object(n.useState)(!1),d=Object(i.a)(u,2),p=d[0],E=d[1];return a=e.OMDB?"".concat("http://www.omdbapi.com/","?apikey=").concat("f939fc5e","&i=").concat(e.imdbID):e.detailsID?"".concat("https://api.themoviedb.org/3/").concat(e.queryType,"/").concat(e.detailsID,"?api_key=").concat("6e28c94e1391da07f513a6acbb34fa23"):e.creditsID?"".concat("https://api.themoviedb.org/3/").concat(e.queryType,"/").concat(e.creditsID,"/credits?api_key=").concat("6e28c94e1391da07f513a6acbb34fa23"):e.query?"".concat("https://api.themoviedb.org/3/","search/").concat(e.queryType,"?api_key=").concat("6e28c94e1391da07f513a6acbb34fa23","&query=").concat(e.query,"&page=").concat(e.page):"".concat("https://api.themoviedb.org/3/").concat(e.queryType,"/").concat(e.listType,"?api_key=").concat("6e28c94e1391da07f513a6acbb34fa23","&page=").concat(e.page),Object(n.useEffect)((function(){(function(){var e=Object(A.a)(q.a.mark((function e(){var t;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(!0),e.prev=1,e.next=4,P.a.get(a);case 4:t=e.sent,c(t.data),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),_(e.t0),console.error("%cData Fetching Error:","font-size: 18px",e.t0);case 12:return e.prev=12,E(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,8,12,15]])})));return function(){return e.apply(this,arguments)}})()()}),[a]),{response:r,error:o,loading:p}},L=function(e){var a,t=Object(n.useState)(null),r=Object(i.a)(t,2),c=r[0],s=r[1],o=Object(n.useState)(0),_=Object(i.a)(o,2),u=_[0],d=_[1],p=Object(m.g)(),E=B({queryType:p.type,query:p.query,page:e.page});return Object(n.useEffect)((function(){null!==E.response&&(s(E.response),d(E.response.total_results))}),[E.response]),a=E.loading||!E.response?l.a.createElement(b,null):c.results.map((function(e,a){return l.a.createElement(y.a,{className:"searchResult__col",key:"".concat(a,"-").concat(e.id),sm:12,md:6,lg:3},l.a.createElement(x,{key:a,card:e,type:p.type}))})),l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{className:"mainContent__title"},e.title,": ",p.query," "),l.a.createElement("h3",null,"Total results: ",u),l.a.createElement(f.a,null,a))},R=t(29),U=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{className:"mainContent__title"},"Details"),l.a.createElement(b,null))},W=function(e){return l.a.createElement(l.a.Fragment,null,e.tagline?l.a.createElement("p",{className:"tagline"},e.tagline):null,l.a.createElement("h2",{className:"title"},e.title),l.a.createElement("div",{className:"text"},e.overview))},K=function(e){var a="N/A";return e.data&&(a=e.data.map((function(e,a){return l.a.createElement("span",{className:"genres badge badge-pill badge-dark",key:a},e.name)}))),l.a.createElement(l.a.Fragment,null,a)},G=function(e){var a="N/A",t=e.data,n=function(e){return Array.from(new Set(e.map((function(e){return e.id})))).map((function(a){return e.find((function(e){return e.id===a}))}))};return"director"===e.type&&(t=n(t=e.fullData.filter((function(e){return"Directing"===e.department&&"Director"===e.job})))),"writer"===e.type&&(t=n(t=e.fullData.filter((function(e){return"Writing"===e.department&&("Screenplay"===e.job||"Writer"===e.job)})))),t&&(a=t.map((function(e,a){return l.a.createElement(s.b,{className:"person-link",key:a,to:"/person_details/".concat(e.id)},e.name)}))),l.a.createElement(l.a.Fragment,null,a)},J=function(e){var a="N/A",t=function(e,a){return l.a.createElement(y.a,{xs:6,md:3,lg:2,key:a,className:"cast__col"},l.a.createElement(s.b,{className:"cast__link",to:"/person_details/".concat(e.id)},l.a.createElement("div",{className:"cast__link__data"},l.a.createElement(D,{src:e.profile_path,width:350,height:520,type:"w200",styled:"cast__link__data__image",title:e.name,text:"No Image"}),l.a.createElement("p",{className:"cast__link__data__name"},e.name),l.a.createElement("small",{className:"cast__link__data__character"},e.character))))};return e.data&&(a=e.number?e.data.slice(0,e.number).map((function(e,a){return t(e,a)})):e.data.map((function(e,a){return t(e,a)}))),l.a.createElement("div",{className:"cast"},l.a.createElement("h2",{className:"cast__title"},e.title),l.a.createElement(f.a,null,a))},z=t(64),H=t.n(z),$=function(){var e,a=Object(m.g)(),t=Object(n.useState)(null),r=Object(i.a)(t,2),c=r[0],s=r[1],o=Object(n.useState)(null),_=Object(i.a)(o,2),u=_[0],d=_[1],p=B({queryType:"movie",detailsID:a.id}),E=B({queryType:"movie",creditsID:a.id});Object(n.useEffect)((function(){null!==p.response&&s(p.response),null!==E.response&&d(E.response)}),[p.response,E.response]);var h=null;return c&&u?(null!==c.backdrop_path&&(h={backgroundImage:"url(https://image.tmdb.org/t/p/original".concat(c.backdrop_path,")")}),e=l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"details__background",style:h}),l.a.createElement("div",{className:"movie details__content"},l.a.createElement(f.a,null,l.a.createElement(y.a,{xs:6,md:3,className:"details__content__poster"},l.a.createElement(D,{src:c.poster_path,width:200,height:300,type:"w200",styled:"details__content__poster__image",title:c.title,text:"No Image"})),l.a.createElement(y.a,{sm:12,md:9,className:"details__content__head"},l.a.createElement("h1",{className:"details__content__head__title"},c.title),l.a.createElement("p",{className:"details__content__head__time"},l.a.createElement("span",{className:"details__content__head__time__icon"},l.a.createElement(R.a,null))," ",function(e){var a=e/60,t=Math.floor(a),n=60*(a-t),l=Math.round(n);return"".concat(t,"h ").concat(l,"min")}(c.runtime)),l.a.createElement("p",{className:"details__content__head__credit"},"Genres ",l.a.createElement("span",null,l.a.createElement(K,{data:c.genres}))),l.a.createElement("p",{className:"details__content__head__credit"},"Directors ",l.a.createElement("span",null,l.a.createElement(G,{type:"director",fullData:u.crew}))),l.a.createElement("p",{className:"details__content__head__credit"},"Written ",l.a.createElement("span",null,l.a.createElement(G,{type:"writer",fullData:u.crew}))))),l.a.createElement("div",{className:"details__content__body"},l.a.createElement(f.a,null,l.a.createElement(y.a,{sm:12,md:3,className:"details__content__body__short"},l.a.createElement("h3",null,"Release date"),l.a.createElement("p",null,j()(c.release_date).format("D MMMM YYYY")),l.a.createElement("h3",null,"Status"),l.a.createElement("p",null,c.status),l.a.createElement("h3",null,"Revenue"),l.a.createElement("p",null,c.revenue>0?H.a.format(c.revenue,{code:"USD",decimalDigits:0}):"N/A"),l.a.createElement("h3",null,"Official website"),l.a.createElement("a",{href:c.homepage,title:c.title,rel:"noopener noreferrer",target:"_blank"},"Link")),l.a.createElement(y.a,{sm:12,md:9,className:"details__content__body__plot"},l.a.createElement(W,{tagline:c.tagline,title:"Plot",overview:c.overview})))),l.a.createElement(J,{title:"Cast",data:u.cast,number:12})))):e=l.a.createElement(U,null),l.a.createElement(l.a.Fragment,null,e)},Q=function(e){var a,t=Object(m.g)(),r=Object(n.useState)(null),c=Object(i.a)(r,2),s=c[0],o=c[1],_=Object(n.useState)(null),u=Object(i.a)(_,2),d=u[0],p=u[1],E=B({queryType:"tv",detailsID:t.id}),h=B({queryType:"tv",creditsID:t.id});return Object(n.useEffect)((function(){null!==E.response&&o(E.response),null!==h.response&&p(h.response)}),[E.response,h.response]),a=s&&d?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"details__background",style:{backgroundImage:"url(https://image.tmdb.org/t/p/original".concat(s.backdrop_path,")")}}),l.a.createElement("div",{className:"series details__content"},l.a.createElement(f.a,null,l.a.createElement(y.a,{xs:6,md:3,className:"details__content__poster"},l.a.createElement(D,{src:s.poster_path,width:200,height:300,type:"w200",styled:"details__content__poster__image",title:s.title,text:"No Image"})),l.a.createElement(y.a,{sm:12,md:9,className:"details__content__head"},l.a.createElement("h1",{className:"details__content__head__title"},s.name),l.a.createElement("p",{className:"details__content__head__time"},l.a.createElement("span",{className:"details__content__head__time__icon"},l.a.createElement(R.a,null))," ",s.episode_run_time[0]," min"),l.a.createElement("p",{className:"details__content__head__credit"},"Genres ",l.a.createElement("span",null,l.a.createElement(K,{data:s.genres}))),l.a.createElement("p",{className:"details__content__head__credit"},"Date ",l.a.createElement("span",null,j()(s.first_air_date).format("YYYY")," - ",j()(s.last_air_date).format("YYYY"))),l.a.createElement("p",{className:"details__content__head__credit"},"Creators ",l.a.createElement("span",null,l.a.createElement(G,{data:s.created_by}))))),l.a.createElement("div",{className:"details__content__body"},l.a.createElement(f.a,null,l.a.createElement(y.a,{sm:12,md:3,className:"details__content__body__short"},l.a.createElement("h3",null,"Release date"),l.a.createElement("p",null,s.release_date),l.a.createElement("h3",null,"Status"),l.a.createElement("p",null,s.status),l.a.createElement("h3",null,"Total episodes"),l.a.createElement("p",null,s.number_of_episodes>0?s.number_of_episodes:"N/A"),l.a.createElement("h3",null,"Seasons"),l.a.createElement("p",null,s.number_of_seasons>0?s.number_of_seasons:"N/A"),l.a.createElement("h3",null,"Official website"),l.a.createElement("a",{href:s.homepage,title:s.title,rel:"noopener noreferrer",target:"_blank"},"Link")),l.a.createElement(y.a,{sm:12,md:9,className:"details__content__body__plot"},l.a.createElement(W,{tagline:s.tagline,title:"Plot",overview:s.overview}))),l.a.createElement(J,{title:"Cast",data:d.cast,number:12})))):l.a.createElement(U,null),l.a.createElement(l.a.Fragment,null,a)},V=function(){var e,a=Object(m.g)(),t=Object(n.useState)(null),r=Object(i.a)(t,2),c=r[0],s=r[1],o=B({queryType:"person",detailsID:a.id});return Object(n.useEffect)((function(){null!==o.response&&s(o.response)}),[o.response]),e=c?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"person details__background"}),l.a.createElement("div",{className:"person details__content"},l.a.createElement(f.a,null,l.a.createElement(y.a,{xs:6,md:3,className:"details__content__poster"},l.a.createElement(D,{src:c.profile_path,width:210,height:315,type:"w200",styled:"details__content__poster__image",title:c.name,text:"No Image"})),l.a.createElement(y.a,{sm:12,md:9,className:"details__content__head"},l.a.createElement("h1",{className:"details__content__head__title"},c.name),l.a.createElement("p",{className:"details__content__head__credit"},"Born ",l.a.createElement("span",null,c.birthday?j()(c.birthday).format("MMM D, YYYY"):"N/A"," in ",c.place_of_birth?c.place_of_birth:"N/A")),c.deathday?l.a.createElement("p",{className:"details__content__head__credit"},"Death ",l.a.createElement("span",null,j()(c.deathday).format("MMM D, YYYY"))):null,l.a.createElement("p",{className:"details__content__head__credit"},"Know for ",l.a.createElement("span",null,c.known_for_department)))),l.a.createElement("div",{className:"details__content__body"},l.a.createElement(f.a,null,l.a.createElement(y.a,{sm:12,md:3,className:"details__content__body__short"},l.a.createElement("h3",null,"Official website"),l.a.createElement("p",null,c.homepage?l.a.createElement("a",{href:c.homepage,rel:"noopener noreferrer",target:"_blank"},"Link"):"N/A"),l.a.createElement("h3",null,"Imdb Link"),l.a.createElement("p",null,c.imdb_id?l.a.createElement("a",{href:"https://www.imdb.com/name/".concat(c.imdb_id),rel:"noopener noreferrer",target:"_blank"},"Link"):"N/A")),l.a.createElement(y.a,{sm:12,md:9,className:"details__content__body__plot"},l.a.createElement(W,{title:"Biography",overview:c.biography})))))):l.a.createElement(U,null),l.a.createElement(l.a.Fragment,null,e)},X=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{className:"mainContent__title"},"Oops! Page not found!"),l.a.createElement("div",{className:"error404"},l.a.createElement("div",{className:"glitch","data-text":"404"},"404")))};var Z=function(){var e=Object(n.useState)(null),a=Object(i.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(null),s=Object(i.a)(c,2),_=s[0],u=s[1],p=Object(n.useState)(null),E=Object(i.a)(p,2),h=E[0],g=E[1],f=Object(n.useState)(null),y=Object(i.a)(f,2),N=y[0],k=y[1],w=Object(m.f)(),D=B({queryType:"movie",listType:"popular",page:1}),O=B({queryType:"movie",listType:"now_playing",page:1}),j=B({queryType:"movie",listType:"upcoming",page:1}),C=B({queryType:"tv",listType:"popular",page:1});return Object(n.useEffect)((function(){null!==D.response&&u(D.response),null!==j.response&&g(j.response),null!==O.response&&r(O.response),null!==C.response&&k(C.response)}),[D.response,j.response,O.response,C.response]),l.a.createElement("div",{className:"App"},l.a.createElement(v,{title:"Movie Search",search:function(e,a){e&&a&&w.push("/search/".concat(a,"/").concat(e))}}),l.a.createElement(o.a,{className:"mainContent"},l.a.createElement(n.Suspense,{fallback:l.a.createElement(b,null)}),l.a.createElement(m.c,null,l.a.createElement(m.a,{path:"/upcoming"},l.a.createElement(I,{listData:h,title:"Upcoming Movies",loading:j.loading,type:"upcoming"})),l.a.createElement(m.a,{path:"/popular"},l.a.createElement(I,{listData:_,loading:D.loading,title:"Popular Movies",type:"popular"})),l.a.createElement(m.a,{path:"/now_playing"},l.a.createElement(I,{listData:t,loading:O.loading,title:"Now Playing Movies",type:"now_playing"})),l.a.createElement(m.a,{path:"/movie_details/:id",component:$}),l.a.createElement(m.a,{path:"/series_details/:id",component:Q}),l.a.createElement(m.a,{path:"/person_details/:id",component:V}),l.a.createElement(m.a,{exact:!0,path:"/"},l.a.createElement(M,{upcomingMoviesData:h,popularMoviesData:_,nowPlayingMoviesData:t,popularSeriesData:N,number:10})),l.a.createElement(m.a,{path:"/search/:type/:query"},l.a.createElement(L,{page:1,title:"Search",type:"search"})),l.a.createElement(m.a,{component:X}))),l.a.createElement("footer",null,l.a.createElement("p",null,l.a.createElement(d.b,null)," ",l.a.createElement(d.a,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(108);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(s.a,null,l.a.createElement(Z,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},65:function(e,a,t){e.exports=t(109)}},[[65,1,2]]]);
//# sourceMappingURL=main.9f1ef2ae.chunk.js.map