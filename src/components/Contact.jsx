import React from 'react'

const Contact = () => {
    return (
        <div>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-12 text-center py-4 my-4">
                        <h1>연락처</h1>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md 5 d-flex justify-content-center">
                        <img src="/assets/images/home/ed-singing.JPG" alt="Contact Us" className="img-fluid" />
                    </div>
                    <div className="col-md-6">
                        <form >
                            <div class="mb-3">
                                <label for="exampleForm" class="form-label">이름</label>
                                <input type="text" class="form-control" id="exampleForm" placeholder="이름"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">이멜</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="이멜 주소"/>
                            </div>
                            <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">이멜 내용</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                            </div>
                             <button type="submit" class="btn btn-outline-primary">보내셔요</button>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
            )
}

            export default Contact
