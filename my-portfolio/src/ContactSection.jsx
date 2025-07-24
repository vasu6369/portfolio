import React, { useState, useRef } from 'react'
import { FaUser, FaEnvelope, FaCommentDots, FaPaperPlane } from 'react-icons/fa'
import emailjs from 'emailjs-com'
import { motion } from 'framer-motion';


export default function ContactSection() {
  const formRef = useRef()
  const [loading, setLoading] = useState(false)

  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .sendForm('service_xnddf1m', 'template_q5tt1gy', formRef.current, 'uyt2LnxSDnHy_flke')
      .then(
        () => {
          setLoading(false)
          alert('Message sent successfully!')
          setForm({ name: '', email: '', message: '', })
        },
        (error) => {
          setLoading(false)
          console.error(error)
          alert('Something went wrong. Please try again.')
        }
      )
  }

  return (
    <motion.div id="contact" className="text-center space-y-2" initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: false }} >

      <section className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-white mb-4 tracking-tight">Let’s <span className="text-purple-500">Connect</span></h2>
          <p className="text-white/80 text-lg max-w-xl mx-auto">Have a project in mind or just want to say hello? Drop me a messagebelow and I’ll get back to you as soon as possible.</p>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-md p-10 rounded-3xl shadow-2xl space-y-6">
          <div className="mb-6">
            <label className="block text-white text-sm mb-2">Name</label>
            <div className="flex items-center bg-white/10 border border-white/20 rounded-md px-3">
              <FaUser className="text-white mr-2" />
              <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Your Name" className="w-full bg-transparent py-2 text-white focus:outline-none" />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-white text-sm mb-2">Email</label>
            <div className="flex items-center bg-white/10 border border-white/20 rounded-md px-3">
              <FaEnvelope className="text-white mr-2" />
              <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="you@example.com" className="w-full bg-transparent py-2 text-white focus:outline-none" />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-white text-sm mb-2">Message</label>
            <div className="flex items-start bg-white/10 border border-white/20 rounded-md px-3 py-2">
              <FaCommentDots className="text-white mr-2 mt-1" />
              <textarea name="message" required rows="5" value={form.message} onChange={handleChange} placeholder="Write your message..." className="w-full bg-transparent text-white focus:outline-none resize-none"></textarea>
            </div>
          </div>
          <input type="hidden" name="time" value={new Date().toLocaleString()} />

          <button type="submit" disabled={loading} className="flex items-center justify-center gap-2 w-full py-3 px-6 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/40">
            {loading ? 'Sending...' : <>Send Message <FaPaperPlane /></>}
          </button>

        </form>
      </section>
    </motion.div>
  )
}
<input type="hidden" name="time" value={new Date().toLocaleString()} />