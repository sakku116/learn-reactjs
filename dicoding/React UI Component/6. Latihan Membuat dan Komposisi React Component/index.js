const root = ReactDOM.createRoot(document.querySelector('#root'));

/*
sebenarnya tidak perlu membuat component yang tidak reusable dalam component yang reusable.
seperti CardHeader yang tidak reusable dalam component Card (container) yang reusable.
tetapi ini untuk pembelajaran component saja
*/

function Header () {
    return (
        <div id="header">
            <h1>Latest News</h1>
            <p>Covering March & April 2022</p>
        </div>
    )
};

// ---------------------------------

function CardHeader ( {category, image} ) {
    return (
        <div>
            <h3>{category}</h3>
            <img src={image} alt="news_img"/>
        </div>
    )
};

function CardContent ( {date, title, content, link} ) {
    return (
        <div>
            <p>{date}</p>
            <h2>{title}</h2>
            <p>{content}</p>
            <a href={link}></a>
        </div>
    )
};

function Card ( {title, date, content, image, category, link} ) {
    return (
        <div className="card">
            <CardHeader category={category} image={image} />
            <CardContent date={date} title={title} content={content} link={link} />
        </div>
    )
};

// ---------------------------------

function News () {
    // data
    const news_datas = [
        {
              title: 'CNN Acuire BEME',
              date: 'March 20 2022',
              content: "CNN purchased Casey Neistat's Beme app for $25million.",
              image: 'https://source.unsplash.com/user/erondu/600x400',
              category: 'News',
              link: '#'
        },
        {
              title: 'React and the WP-API',
              date: 'March 19 2022',
              content: 'The first ever decoupled starter theme for React & the WP-API.',
              image: 'https://source.unsplash.com/user/ilyapavlov/600x400',
              category: 'News',
              link: '#'
        },
        {
              title: 'Nomad Lifestyle',
              date: 'March 19 2022',
              content: 'Learn our tips and tricks on living a nomadic lifestyle.',
              image: 'https://source.unsplash.com/user/erondu/600x400',
              category: 'Travel',
              link: '#'
        }
    ];

    return (
        <div>
            <Header />
            <div id="cardContainer">
                <Card title={news_datas[0].title} date={news_datas[0].date} content={news_datas[0].content}
                    content={news_datas[0].content} image={news_datas[0].image} category={news_datas[0].category}
                    link={news_datas[0].link} />
                <Card {...news_datas[1]} />
                <Card {...news_datas[2]} />

            </div>
        </div>
    )
    // cara ringkas untuk pass props dari sebuah dictionary ...neww_datas[dict_index_of_list]
    /*
    atau bisa langsung merender html menggunakan react seperti dibawah untuk merender
    semua card tanpa menulis element card satu satu
    {someNews.map((news) => (
                <Card {...news} />
            )
        )
    }
    */
};

// main container
const main = (
    <News />
) 

root.render(main);