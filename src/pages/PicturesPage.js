const PICTURES_DATA = [
    {
        id: 1,
        credit: "https://unsplash.com/@acharki95?utm_source=unsplash&utm_medium=referral&utm_content = creditCopyText",
        author: "Aziz Acharki",
        name: "aziz-acharki-oEibQEiq2cM-unsplash.jpg"
    },
    {
        id: 2,
        credit: "https://unsplash.com/@acharki95?utm_source=unsplash&utm_medium=referral&utm_content = creditCopyText",
        author: "Aziz Acharki",
        name: "aziz-acharki-OJjVVwZVYuo-unsplash.jpg"
    },
    {
        id: 3,
        credit: "https://unsplash.com/@yan_slg?utm_source=unsplash&utm_medium=referral&utm_content = creditCopyText",
        author: "Aziz Acharki",
        name: "aziz-acharki-S53UjsK3A2o-unsplash.jpg"
    }

];


export function PicturesPage() {
    return (
        <div>
            <h1>Pictures</h1>
            {PICTURES_DATA.map(picture => <Picture key={picture.name} picture={picture}/>)}

        </div>
    )
}

function Picture(props) {
    const {picture} = props;
    return <div>
        <img src={`images/` + picture.name}
             alt={picture.name}
             width="100%"
             style={{margin: "2vw auto 0 auto"}}/>
        By <a href={picture.credit}> {picture.author}</a>
    </div>
}