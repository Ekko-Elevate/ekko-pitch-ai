/**
 * v0 by Vercel.
 * @see https://v0.dev/t/sFlZ2JR8lqP
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Component() {
  return (
    <div className="bg-white">
      <div>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="space-y-2 text-[#0F172A]">
              <h1 className="text-4xl font-bold tracking-tighter pt-16">Terms of Service</h1>
              <p className="text-gray-500 dark:text-gray-400">Last updated: September 1, 2024</p>
            </div>
            <div className="prose prose-gray max-w-none text-[#0F172A]">
				<p className="pb-12">
					Welcome to our Terms of Service! These terms and conditions outline the rules and regulations for the
					use of Example Company's Website, located at http://www.example.com.
				</p>
				<div className="flex flex-col gap-6">
					<h2 className="text-2xl font-bold tracking-tighter">Intellectual Property</h2>
					<p>
						Unless otherwise stated, Example Company and/or its licensors own the intellectual property rights for
						all material on example.com. All intellectual property rights are reserved. You may access this from
						example.com for your own personal use subjected to restrictions set in these terms and conditions.
					</p>
				</div>
				<div className="flex flex-col pt-12 gap-6 pb-12">
					<h2 className="text-2xl font-bold tracking-tighter">Restrictions</h2>
					<p>You are specifically restricted from all of the following:</p>
					<ul class="list-disc ml-5 space-y-2">
						<li>Publishing any website material in any other media.</li>
						<li>Selling, sublicensing, and/or otherwise commercializing any website material.</li>
						<li>Publicly performing and/or showing any website material.</li>
						<li>Using this website in any way that is or may be damaging to this website.</li>
						<li>Using this website in any way that impacts user access to this website.</li>
						<li>
							Using this website contrary to applicable laws and regulations, or in any way may cause harm to the
							website, or to any person or business entity.
						</li>
						<li>
							Engaging in any data mining, data harvesting, data extracting or any other similar activity in
							relation to this website.
						</li>
					</ul>
					<p>
						Certain areas of this website are restricted from being access by you and Example Company may further
						restrict access by you to any areas of this website, at any time, in absolute discretion. Any user ID
						and password you may have for this website are confidential and you must maintain confidentiality as
						well.
					</p>
				</div>
				<div className="flex flex-col gap-6 pb-12">
					<h2 className="text-2xl font-bold tracking-tighter">Your Privacy</h2>
					<p>
						Please read our Privacy Policy. Your agreement to the terms of this Privacy Policy is hereby
						incorporated into these Terms of Service.
					</p>
				</div>
				<div className="flex flex-col gap-6 pb-12">
					<h2 className="text-2xl font-bold tracking-tighter">No warranties</h2>
					<p>
						This website is provided "as is," with all faults, and Example Company express no representations or
						warranties, of any kind related to this website or the materials contained on this website. Also,
						nothing contained on this website shall be interpreted as advising you.
					</p>
				</div>
				<div className="flex flex-col gap-6 pb-12">
					<h2 className="text-2xl font-bold tracking-tighter">Limitation of liability</h2>
					<p>
						In no event shall Example Company, nor any of its officers, directors, and employees, shall be held
						liable for anything arising out of or in any way connected with your use of this website whether such
						liability is under contract. Example Company, including its officers, directors, and employees shall not
						be held liable for any indirect, consequential or special liability arising out of or in any way related
						to your use of this website.
					</p>
				</div>
				<div className="flex flex-col gap-6 pb-12">
					<h2 className="text-2xl font-bold tracking-tighter">Indemnification</h2>
					<p>
						You hereby indemnify to the fullest extent Example Company from and against any and/or all liabilities,
						costs, demands, causes of action, damages and expenses arising in any way related to your breach of any
						of the provisions of these Terms.
					</p>
				</div>
				<div className="flex flex-col gap-6 pb-12">
					<h2 className="text-2xl font-bold tracking-tighter">Severability</h2>
					<p>
						If any provision of these Terms is found to be invalid under any applicable law, such provisions shall
						be deleted without affecting the remaining provisions herein.
					</p>
				</div>
				<div className="flex flex-col gap-6 pb-12">
					<h2 className="text-2xl font-bold tracking-tighter">Variation of Terms</h2>
					<p>
						Example Company is permitted to revise these Terms at any time as it sees fit, and by using this Website
						you are expected to review these Terms on a regular basis.
					</p>
				</div>
				<div className="flex flex-col gap-6 pb-12">
					<h2 className="text-2xl font-bold tracking-tighter">Entire Agreement</h2>
					<p>
						These Terms constitute the entire agreement between Example Company and you in relation to your use of
						this Website, and supersede all prior agreements and understandings.
					</p>
				</div>
				<div className="flex flex-col gap-6 pb-12">
					<h2 className="text-2xl font-bold tracking-tighter">Governing Law &amp; Jurisdiction</h2>
					<p>
						These Terms will be governed by and interpreted in accordance with the laws of the State of Example, and
						you submit to the non-exclusive jurisdiction of the state and federal courts located in Example for the
						resolution of any disputes.
					</p>
				</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-center space-x-4 text-sm">
          <Link href="#" className="font-medium" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="font-medium" prefetch={false}>
            Privacy Policy
          </Link>
          <Link href="#" className="font-medium" prefetch={false}>
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}