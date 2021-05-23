//  Your API key is: d7dd2ee8a15c65fcb2a09c6ff8ca6e34
// want to see response=>
// https://gnews.io/api/v4/search?q=example&token=d7dd2ee8a15c65fcb2a09c6ff8ca6e34
// -----------------------------------------------------------

let newsAccordion = document.getElementById('newsAccordion');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://gnews.io/api/v4/search?q=example&token=d7dd2ee8a15c65fcb2a09c6ff8ca6e34', true);
xhr.onload = function () {
    if (this.status === 200) {
        let responseObj = JSON.parse(this.responseText)
        let articles = responseObj.articles;
        let str = '';
        // for (const items in articles) {

        //         str += `<li>${articles[items].title} </li>`;
        //     }
        // both are correct
        articles.forEach(function(element,index) {
            
            // we can also take index like this 
            // console.log(index)

            let news = `<div class="card">
                        <div class="card-header" id="heading${index}">
                            <h2 class="mb-0">
                                <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse"
                                    data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}"> 
                                    BREAKING NEWS: <b>${element["title"]}</b>
                                            </button>
                            </h2>
                        </div>
            
                        <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}"
                            data-parent="#newsAccordion">
                            <div class="card-body">
                                ${element["content"]}.<a href="${element['url']}" style="color:red;"target="_blank" >Read more </a> 
                                        </div>
                        </div>
                    </div>`

            str += news;
        });
        newsAccordion.innerHTML = str;






    }
    else {
        // document.write("You Have Exceded the Daily Limit of 100 API requests");
    }

}
xhr.send();






