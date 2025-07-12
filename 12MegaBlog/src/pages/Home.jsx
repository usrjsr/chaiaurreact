import React, { useEffect, useState } from 'react';
import appwriteService from "../appwrite/config";
import { Container, PostCard } from '../components';

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
        });
    }, []);

    if (posts.length === 0) {
        return (
            <div className="w-full py-20 min-h-screen bg-gradient-to-br from-[#fdfbfb] to-[#ebedee]">
                <Container>
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-gray-700 mb-2">
                            🔒 Login to Read Posts
                        </h1>
                        <p className="text-gray-500 text-lg">Start exploring amazing stories once you're logged in.</p>
                    </div>
                </Container>
            </div>
        );
    }

    return (
        <div className="w-full py-12 min-h-screen bg-gradient-to-br from-[#fdfbfb] to-[#ebedee]">
            <Container>
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-800 mb-2 drop-shadow">
                        📚 Discover Latest Blog Posts
                    </h1>
                    <p className="text-gray-600 text-lg max-w-xl mx-auto">
                        Handpicked articles to keep your mind curious and inspired.
                    </p>
                </div>

                {/* Post Grid */}
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

export default Home;
