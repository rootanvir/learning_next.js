import Feed from '@components/Feed'

const Home = () => {
    return (
        
        <section className="w-full flex flex-col justify-center items-center text-center">
            <h1 className="head_text text_center">
                Discover & Share
                <br className="max-md:hidden" />
                <span className="orange_gradient"> AI-powered Prompts</span>
            </h1>

            <p className="desc text-center mt-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus iste voluptates maxime,
                dicta voluptatum recusandae labore odio rerum. Quas, odio?
            </p>
            <Feed />

        </section>
        

    )
}
export default Home