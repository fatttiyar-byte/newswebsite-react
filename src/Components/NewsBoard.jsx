import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Newsitem from "./Newsitem";
import { Pagination } from "@mui/material";



const NewsBoard = ({ searchQuery, category }) => {
    //ذخیره اخبار فیلتر شده بعد سرچ
    const [filteredArticles, setfilterArticles] = useState([])
    //ذخیره همه اخبار
    const [articles, setArticles] = useState([]);
    //شماره صفحه فعلی
    const [page, setPage] = useState(1);
    //همه صفحات
    const [totalPages, setTotalPages] = useState(1);


    //دریافت خبر از api
    useEffect(() => {


        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&page=${page}&pageSize=8&apiKey=c2356462d22f48adbd143e860fd7d352`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setArticles(data.articles);
                setfilterArticles(data.articles);//ذخیره اخبار برای نمایش
                setTotalPages(Math.ceil(data.totalResults / 9));

            });
    }, [page, category]);


    //search
    useEffect(() => {
        if (searchQuery.trim() === "") {
            setfilterArticles(articles);
        } else {
            const filtered = articles.filter(
                article =>
                    article.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    article.description?.toLowerCase().includes(searchQuery.toLowerCase())
            );

            setfilterArticles(filtered);
        }
    }, [searchQuery, articles]);


    const handleChange = (event, value) => {
        setPage(value);

        // اسکرول صفحه
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="container" >

            <h2 className="text-center fs-1 my-4">خبرها</h2>

            <div className="row g-4">
                {filteredArticles.map((news, index) => (
                    <div className="col-lg-4 col-md-6 col-12" key={index}>
                        <Newsitem
                            title={news.title}
                            src={news.urlToImage}
                            description={news.description}
                            url={news.url}
                            searchQuery={searchQuery}
                        />
                    </div>
                ))}
            </div>

           {filteredArticles.length > 0 ? (
    <Stack
        spacing={2}
        sx={{
            mt: 5,
            mb: 5,
            display: "flex",
            alignItems: "center",
            gridTemplateColumns: "repeat(4, 1fr)"
        }}
    >
        <Pagination
            page={page}
            count={totalPages}
            onChange={handleChange}
        />
    </Stack>
) : (
    <div className="alert alert-warning text-center my-5">
        خبری یافت نشد.
    </div>
)}


        </div>
    );
};

export default NewsBoard;