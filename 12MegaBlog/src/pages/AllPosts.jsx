import React, { useState, useEffect } from 'react';
import { Container, PostCard } from '../components';
import appwriteService from "../appwrite/config";

function AllPosts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
        });
    }, []);

    return (
        <div className="w-full py-12 min-h-screen bg-gradient-to-br from-[#fdfbfb] to-[#ebedee]">
            <Container>
                {/* 🌟 Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-800 mb-2 drop-shadow">
                        Explore Inspiring Stories
                    </h1>
                    <p className="text-gray-600 text-lg max-w-xl mx-auto">
                        Dive into thoughts, ideas, and articles crafted for curious minds.
                    </p>
                </div>

                {/* 🧊 Grid */}
                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {posts.map((post) => (
                        <div
                            key={post.$id}
                            className="bg-white/70 border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-all backdrop-blur-md"
                        >
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default AllPosts;
