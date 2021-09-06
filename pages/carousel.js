import React from "react"
import { UncontrolledCarousel} from "reactstrap"

const itens = [
    {
        src: require("/public/images/post-1.png"),
        altText: "Post 1",
        caption: "",
        header:"",
        key:"1",
    },
    {
        src: require("/public/images/post-2.png"),
        altText: "Post 2",
        caption: "",
        header:"",
        key:"2",
    },
    {
        src: require("/public/images/post-3.png"),
        altText: "Post 3",
        caption: "",
        header:"",
        key:"3",
    },
    {
        src: require("/public/images/post-4.png"),
        altText: "Post 4",
        caption: "",
        header:"",
        key:"4",
    },
    {
        src: require("/public/images/post-5.png"),
        altText: "Post 5",
        caption: "",
        header:"",
        key:"5",
    },
]

const CarrosselSlide = () => <UncontrolledCarousel itens={itens}/>
        

export default CarrosselSlide