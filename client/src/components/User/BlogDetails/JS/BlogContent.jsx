import React from "react";
import "../CSS/BlogContent.css";
const BlogPageImage = 'BlogBanner2.webp'

const BlogContent = () => {
    return (
        <>
            <div className="BlogPage-Parent">
                <div className="container">
                    <div className="container BlogPage-Child">
                        <div>
                            <div class="card bg-dark text-white">
                                <img src={BlogPageImage} className="BlogPageBanner" alt="BlogBanner2" />
                            </div>
                            <p className="BlogHead1">Darjeeling Tour Packages – Book Darjeeling Packages at Best Price</p>
                            <p className="BlogHead2"><i class="fa-solid fa-calendar-days mr-3"></i>October 23,2019 </p>
                            <p className="BlogHead3"><i class="fa-regular fa-tag mr-3"></i>Blog</p>
                            Darjeeling is known for its top-class aromatic tea, which is adored worldwide climate, and the Darjeeling Himalayan Railway which is fondly known as the Toy Train which is now part of UNESCO WORLD heritage site. It’s best to take a Darjeeling local sightseeing tour to cave in most of the attractions systematically in a relatively short time. Darjeeling is a perfect collage of snowy and mighty Himalayan ranges, winding walking tracks, valleys, monastery, momos, tea plantation, and Darjeeling  toy trains. The untouched beauty of this Hilltown attracts visitors from across the country to take a break from the bustling city life. Here is a list of tourist places in Darjeeling you must check our site.<br></br>
                            <ol>
                                <li><b> Tiger Hill– </b>Tiger Hill is best known for its trekking routes and panoramic views of Mt Everest and Kanchenjunga. It is recommended to witness the first rays of sun on Mt Everest. Another interesting thing about this place is that it is the summit of Ghoom, a UNESCO WORLD Heritage site as well as the highest railway station in Darjeeling. The best time to visit Tiger Hill is greenery around October, November, and December in winter and February to April in Autumn</li>

                                <li><b>Sandakphu Trek –</b> Sandakphu is the highest peak in West Bengal. Sandakphu Trek is thrilling and amusing. It is a moderate-level trek that takes you through some extremely scenic landscape until you finally reach Sandakphu at 11,929 feet.</li>
                                <li><b>Batasia Loop –</b> Batasia Loop offers beautiful views of the valley and the snowy abode of Mt Kanchenjunga. It is a mesmerizing toy train pathway that is set amidst the lush greenery mountainside. Here the place is a surrounding tunnel, Hill locked valley and little hops in the area make Batasia Loop is one of the top places to visit in Darjeeling Tour, everything about this place seems dreamy. The entire scenery of the place often inspired people to create an art of their own. Batasia Loop is quite splendors, especially to the eyes that have witnessed the most beautiful sunrise ever.</li>
                                <li><b>Darjeeling Rangit Valley Ropeway –</b> The Ropeway come into existence in 1968. It has been quite an Darjeeling  attraction for the tourists. The beautiful Hill Station of Darjeeling is best viewed via the exquisite landscape, verdant tea estate, lush green forest breath-taking flora, and fauna to the snow-capped mountains peaks of the Everest and Kanchenjunga. The place gives the passengers to click some amazing photography of this beautiful town.</li>
                            </ol>
                            <hr></hr>

                            {/* <div className="BlogPage-Bottom">
                                <p>Leave a reply</p>
                                <form>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Full name</label>
                                        <input type="text" class="form-control" id="exampleInputName" />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>

                                    <div class="form-group">
                                        <label for="exampleFormControlTextarea1">Comment</label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                    <div class="form-group form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                    </div>
                                    <button type="submit" class="BlogPage-commentButton">Post Comment</button>
                                </form>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BlogContent;