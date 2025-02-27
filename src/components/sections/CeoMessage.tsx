import { motion } from "framer-motion";

const CeoMessage: React.FC = () => (
  <section className="relative w-full bg-white overflow-hidden py-16">
    {/* Top curved border */}
    <div className="absolute top-0 left-0 w-full h-16">
      <div className="w-full h-full bg-dark-cyan/90 rounded-b-[100%]" />
    </div>

    {/* Bottom curved border */}
    <div className="absolute bottom-0 left-0 w-full h-16">
      <div className="w-full h-full bg-dark-cyan/90 rounded-t-[100%]" />
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative h-[400px] flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="w-full h-full max-w-[400px] relative"
            >
              <img
                src="/assets/images/ceo/CeoMessage.png"
                alt="CEO Shagun Nagpal"
                className="w-full h-full object-contain rounded-xl shadow-lg"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Right side - Content */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-4xl font-bold text-caribbean leading-tight mb-6 italic"
          >
            'Message from Our CEO,
            <br />
            Shagun Nagpal'
          </motion.h2>

          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-md text-teal"
            >
              "As the CEO of DataSense, I am honored to share our vision with you.
              We founded this platform with a mission to democratize data
              learning—making it accessible, practical, and truly impactful. In
              today's fast-evolving digital landscape, theoretical knowledge alone
              is not enough; real-world application is the key to standing out.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-md text-teal"
            >
              At DataSense, we go beyond traditional learning. Our platform is a
              thriving ecosystem—a collaborative community, an interactive
              learning space, and a launchpad for aspiring data professionals.
              Whether you're taking your first steps in data or advancing your
              expertise, we are committed to providing the resources, guidance,
              and opportunities to help you succeed.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-md text-teal"
            >
              Join us as we shape the future of data education, where learning is
              limitless and innovation knows no bounds."
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CeoMessage;