# Security Policy

## Supported Versions

We release patches for security vulnerabilities. Which versions are eligible for receiving such patches depends on the CVSS v3.0 Rating:

| Version | Supported          |
| ------- | ------------------ |
| Latest  | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability within this project, please send an email to the repository owner. All security vulnerabilities will be promptly addressed.

**Please do not report security vulnerabilities through public GitHub issues.**

When reporting a vulnerability, please include:

- Type of issue (e.g. XSS, CSRF, etc.)
- Full paths of source file(s) related to the manifestation of the issue
- The location of the affected source code (tag/branch/commit or direct URL)
- Any special configuration required to reproduce the issue
- Step-by-step instructions to reproduce the issue
- Proof-of-concept or exploit code (if possible)
- Impact of the issue, including how an attacker might exploit it

## Security Best Practices

This project follows security best practices for web applications:

### Content Security Policy (CSP)

When deploying this application, it's recommended to implement a Content Security Policy. Add the following header to your web server configuration:

```
Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'
```

### Security Headers

When serving this application in production, configure your web server to include these security headers:

```
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

### HTTPS

Always serve this application over HTTPS in production environments. GitHub Pages automatically provides HTTPS.

### Dependency Management

This project has zero external dependencies, reducing the attack surface:

- No npm packages
- No third-party JavaScript libraries
- Pure HTML, CSS, and vanilla JavaScript only

### Input Validation

While this application doesn't currently accept user input, any future features that do should:

- Sanitize and validate all user inputs
- Encode outputs properly to prevent XSS attacks
- Use parameterized queries for any database operations

### Regular Updates

- Keep your web server software up to date
- Monitor this repository for security updates
- Review and update security configurations periodically

## Security Scanning

This project can be scanned for vulnerabilities using:

- GitHub's Dependabot (for any future dependencies)
- CodeQL analysis for code quality and security issues
- Regular security audits

## Disclosure Policy

When we receive a security bug report, we will:

1. Confirm the problem and determine the affected versions
2. Audit code to find any potential similar problems
3. Prepare fixes for all supported versions
4. Release patches as soon as possible

## Comments on This Policy

If you have suggestions on how this process could be improved, please submit a pull request or open an issue.
