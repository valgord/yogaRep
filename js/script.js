window.addEventListener('load', function(){
    let infoList = document.querySelector('.info-header'),
        tab = document.querySelectorAll('.info-header-tab'),
        tabContent = document.querySelectorAll('.info-tabcontent');
        function hideTabContent(a){
            for (let i=a; i < tabContent.length; i++ ){
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
            }           
        }
        hideTabContent(1);
        
        function showTabContent(b){
            if (tabContent[b].classList.contains('hide')){
                tabContent[b].classList.remove('hide');
                tabContent[b].classList.add('show');               
            }
        }

        infoList.addEventListener('click', function(event){
        let target = event.target;
            if (target && target.classList.contains('info-header-tab')) {
                for (let i = 0; i < tab.length; i++) {
                    if (target == tab[i]){
                        hideTabContent(0);
                        showTabContent(i);
                    }
                }
            }
        });

//Timer developing

            let deadline = "2020-07-23";
            function currentTimeDifference(endTime){
                let time = Date.parse(endTime) - Date.parse(new Date());
                let seconds = time / 1000 % 60,
                    minutes = time / 1000 / 60 % 60,
                    hours = time / 1000 / 60 / 60,
                    days = time / 1000 / 60 /60 / 24 % 7,
                    weeks = time / 1000/ 60/ 60/ 24 / 7;
                return {
                    total : time,
                    seconds : Math.floor(seconds),
                    minutes : Math.floor(minutes), 
                    hours: Math.floor(hours),
                    days : Math.floor(days), 
                    weeks : Math.floor(weeks)
                };
            }
            let timer = document.querySelector('#timer');
            function timeUpdate(subj, endTime){
                let t = currentTimeDifference(endTime);
                let newNode;
                if (t.hours > 24) {
                    newNode1 = document.createElement('span');
                    newNode1.textContent = ":";
                    newNode = document.createElement('span');
                    subj.appendChild(newNode1);
                    subj.appendChild(newNode);
                    newNode.classList.add('seconds');
                }

                let timeInterval = setInterval(function() {
                    let t = currentTimeDifference(endTime);



                    document.querySelector('.seconds').textContent = t.seconds ;
                    document.querySelector('.minutes').textContent = t.minutes;    
                    //document.querySelector('.days').textContent = t.days; 
                    document.querySelector('.hours').textContent = t.hours % 24;
                    newNode.textContent = t.days;
                    if (t.total <= 0) clearInterval(timeInterval);
                },1000);}
            timeUpdate(timer, deadline);
            
            let modalBtn = document.querySelector('.more');
            let overlay = document.querySelector('.overlay');
            modalBtn.addEventListener('click', function(){
                    overlay.style.display = 'block';
                    this.classList.add('more-splash');
                    document.body.style.overflow = "hidden";
            });
            let closeBtn = document.querySelector('.popup-close');
            closeBtn.addEventListener('click', function(){
                overlay.style.display = 'none';
                modalBtn.classList.remove('more-splash');
                document.body.style.overflow = "";
            });


            let message = {
                loading: 'загрузка..',
                success: 'Спасибо, скоро свяжемся с вами',
                failure: 'Что - то пошло не так'
            };
//form
            let form = document.querySelector('.main-form'),
                input = form.getElementsByTagName('input'),
                statusMessage = document.createElement('div');

                statusMessage.classList.add('status');

                form.addEventListener('submit', function(event){
                    event.preventDefault();
                    form.appendChild(statusMessage);

                    // let requst = new XMLHttpRequest();
                    //     requst.open('POST', 'server.php');
                    //     requst.setRequestHeader('Content-Type', 'application/x-www-form-urlencoder');
                    // let formData = new FormData(form);
                    // requst.send(formData);


                    // requst.addEventListener('readystatechange', function(){
                    //     if (requst.readyState < 4){
                    //         statusMessage.innerHTML = message.loading;
                    //     } else 
                    //         if (requst.readyState == 4 && requst.status == 200) {
                    //             statusMessage.innerHTML = message.success;
                    //         } else  
                    //             {
                    //                 statusMessage.innerHTML = message.failure;
                    //             }
                    // });

                    const p = new Promise((resolve, reject) => {
                        let requst = new XMLHttpRequest();
                        requst.open('POST', 'server.php');
                        requst.setRequestHeader('Content-Type', 'application/x-www-form-urlencoder');
                        let formData = new FormData(form);
                        requst.send(formData);
                        alert(5);
                        statusMessage.innerHTML = message.loading;
                        setTimeout(() => console.log("fsfds"), 3000);
                        resolve();
                    });
                    p.then(() => {
                        statusMessage.innerHTML = message.success;
                    }).catch(() => {
                        statusMessage.innerHTML = message.failure;
                    });
                });


                // console.log('Getting request');
                // setTimeout(() => {
                //     console.log('Preparing');
                //     const appData = {
                //         server: 'server',
                //         port: '2000',
                //         status: 'working'
                //     };
                //     setTimeout(() => {
                //         appData.modify = 'modified';
                //         console.log('data received',appData);
                //     }, 2000);
                // }, 1000);
                

                // console.log('Getting request');
                // const p = new Promise((resolve, reject) => {
                //     setTimeout(() => {
                //         const appData = {
                //             server: 'server',
                //             port: '2000',
                //             status: 'working'
                //         };
                //         resolve(appData);
                //     }, 2000);
                // });
                // p.then(data => {
                //     return new Promise((resolve, reject) => {
                //         setTimeout(() => {
                //             console.log('Preparing');        
                //             data.modified = 'true';
                //             resolve(data);   
                //         },3000);
                //     }).then(clientData => {
                //         console.log('данные на стороне клиента', clientData);
                //     }).catch(err => {
                //         console.error("error: ", err);
                //     });
                // });


                // function sleep(ms){
                //     return new Promise(function(resolve){
                //         setTimeout(function(){
                //             resolve();
                //         }, ms);
                //     }); 
                // }
                // sleep(2000).then(() => console.log('Привет'));   

                // const newSpleep = ms => {
                //     return new Promise(resolve => {
                //         setTimeout(() => resolve(), ms);
                //     });
                // };
                // newSpleep(3000).then(() => console.log('hello'));
});