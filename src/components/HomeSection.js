import React, { useState, useEffect } from 'react'

let HomeSection = (props) => {
    const [ref] = useState(React.createRef())
    useEffect(() => {
        const selectedSection = ref.current
        const options = {
            root: null,
            rootMargin: '100px',
            threshold: 0
        }

        function sectionRender(section) {
            section.classList.add('appear')
        }

        const observer = new IntersectionObserver(function (entries, observer) {
            let entry = entries[0]
            if(!entry.isIntersecting){
                return
            } else {
                sectionRender(entry.target)
                observer.unobserve(entry.target)
            }
            console.log(entry.isIntersecting, props)
        }, options)
        observer.observe(selectedSection)
    }, [])

    return (
        <div>
            <div ref = {ref} class = 'row homeRow transition'>
                {props.children}
            </div>
        </div>
    )
} 

export default HomeSection