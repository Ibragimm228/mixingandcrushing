import { Link } from 'react-router'

export function PrivacyPolicyPage() {
	return (
		<main
			style={{
				padding: '2rem',
				maxWidth: '1200px',
				margin: '0 auto',
				color: '#333',
			}}
		>
			<h1>Privacy Policy</h1>
			<p>
				<strong>Effective Date:</strong> June 9, 2025
			</p>

			<p>
				This Privacy Policy describes how we collect, use, and share personal
				information when you visit our website related to Phlebotomy Technician
				training, certification, and related resources (the "Site").
			</p>

			<h2>1. Information We Collect</h2>
			<p>We may collect the following types of information:</p>
			<ul>
				<li>
					Personal information you provide voluntarily, such as your name and
					email when you subscribe to a newsletter or contact us.
				</li>
				<li>
					Usage data, such as pages viewed, time spent on the Site, and browser
					information, collected automatically through cookies and analytics
					tools.
				</li>
			</ul>

			<h2>2. How We Use Information</h2>
			<p>We use collected information to:</p>
			<ul>
				<li>Provide and maintain the Site</li>
				<li>Respond to inquiries and provide customer support</li>
				<li>Send newsletters or promotional content (if you have opted in)</li>
				<li>Analyze and improve the content and user experience</li>
			</ul>

			<h2>3. Sharing Information</h2>
			<p>
				We do not sell, trade, or rent your personal information to third
				parties. We may share information with trusted service providers who
				assist us in operating the Site, as required by law, or to protect our
				legal rights.
			</p>

			<h2>4. Cookies</h2>
			<p>
				We use cookies to enhance your browsing experience. You can control
				cookie preferences through your browser settings.
			</p>

			<h2>5. Third-Party Links</h2>
			<p>
				Our Site may contain links to third-party websites. We are not
				responsible for the privacy practices of these websites.
			</p>

			<h2>6. Data Security</h2>
			<p>
				We implement reasonable security measures to protect your information.
				However, no method of transmission over the internet is 100% secure.
			</p>

			<h2>7. Your Rights</h2>
			<p>
				You may request to access, update, or delete your personal information
				by contacting us at [Your Contact Email].
			</p>

			<h2>8. Changes to This Privacy Policy</h2>
			<p>
				We may update this Privacy Policy from time to time. The updated version
				will be posted on this page with the revised effective date.
			</p>

			<h2>9. Contact Us</h2>
			<p>
				If you have any questions about this Privacy Policy, please contact us{' '}
				<Link className='text-red-500' to='/contacts'>
					here
				</Link>
			</p>
		</main>
	)
}
