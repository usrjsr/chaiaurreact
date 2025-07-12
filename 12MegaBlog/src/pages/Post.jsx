import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);
    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else {
            navigate("/");
        }
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredimage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="min-h-screen py-10 bg-gradient-to-b from-gray-50 to-white">
            <Container>
                <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-3xl shadow-lg p-6 md:p-10 relative">
                    
                    {/* Post Image */}
                    <div className="mb-6 overflow-hidden rounded-2xl shadow-md">
                        <img
                            src={appwriteService.getFileView(post.featuredimage)}
                            alt={post.title}
                            className="w-full h-72 object-cover transition-transform duration-300 hover:scale-105"
                        />
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl font-bold text-gray-800 mb-4 tracking-tight leading-tight">
                        {post.title}
                    </h1>

                    {/* Author Actions */}
                    {isAuthor && (
                        <div className="absolute top-6 right-6 flex gap-3">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button
                                    bgColor="bg-green-600 hover:bg-green-700"
                                    className="px-4 py-2 text-sm shadow-md"
                                >
                                    Edit
                                </Button>
                            </Link>
                            <Button
                                bgColor="bg-red-600 hover:bg-red-700"
                                onClick={deletePost}
                                className="px-4 py-2 text-sm shadow-md"
                            >
                                Delete
                            </Button>
                        </div>
                    )}

                    {/* Content */}
                    <div className="mt-6 prose prose-lg max-w-none text-gray-700 leading-relaxed">
                        {parse(post.content)}
                    </div>
                </div>
            </Container>
        </div>
    ) : null;
}
