import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TemplateEmailContatoService {
  getEmailContatoTemplate(
    assunto: string,
    conteudo: string,
    agradecimento: string
  ) {
    return `
	<!doctype html>
	<html>

	<head>
	<meta name="viewport" content="width=device-width">
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>Simple Responsive HTML Email With Button</title>
	<style>
	@media only screen and (max-width: 620px) {
	table[class=body] h1 {
		font-size: 28px !important;
		margin-bottom: 10px !important;
	}

	table[class=body] p,
	table[class=body] ul,
	table[class=body] ol,
	table[class=body] td,
	table[class=body] span,
	table[class=body] a {
		font-size: 16px !important;
	}

	table[class=body] .wrapper,
	table[class=body] .article {
		padding: 10px !important;
	}

	table[class=body] .content {
		padding: 0 !important;
	}

	table[class=body] .container {
		padding: 0 !important;
		width: 100% !important;
	}

	table[class=body] .main {
		border-left-width: 0 !important;
		border-radius: 0 !important;
		border-right-width: 0 !important;
	}

	table[class=body] .btn table {
		width: 100% !important;
	}

	table[class=body] .btn a {
		width: 100% !important;
	}

	table[class=body] .img-responsive {
		height: auto !important;
		max-width: 100% !important;
		width: auto !important;
	}
	}
	@media all {
	.ExternalClass {
		width: 100%;
	}

	.ExternalClass,
	.ExternalClass p,
	.ExternalClass span,
	.ExternalClass font,
	.ExternalClass td,
	.ExternalClass div {
		line-height: 100%;
	}

	.apple-link a {
		color: inherit !important;
		font-family: inherit !important;
		font-size: inherit !important;
		font-weight: inherit !important;
		line-height: inherit !important;
		text-decoration: none !important;
	}

	.btn-primary table td:hover {
		background-color: #d5075d !important;
	}

	.btn-primary a:hover {
		background-color: #d5075d !important;
		border-color: #d5075d !important;
	}
	}
	</style></head>

	<body class style="background-color: #eaebed; font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
	<table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; background-color: #eaebed; width: 100%;" width="100%" bgcolor="#eaebed">
		<tr>
		<td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">&nbsp;</td>
		<td class="container" style="font-family: sans-serif; font-size: 14px; vertical-align: top; display: block; max-width: 580px; padding: 10px; width: 580px; Margin: 0 auto;" width="580" valign="top">
			<div class="header" style="padding: 20px 0;">
			<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; width: 100%;">
				<tr>
				<td class="align-center" width="100%" style="font-family: sans-serif; font-size: 14px; vertical-align: top; text-align: center;" valign="top" align="center">
					<a href="https://dbc-wiriswernek.vercel.app/" style="color: #ec0867; text-decoration: underline;">
					<img src="https://firebasestorage.googleapis.com/v0/b/digital-business-card-1785c.appspot.com/o/recursos-email%2Fheader.png?alt=media&token=64f2e290-87cc-4ebc-8a08-d283bae50fb8&_gl=1*sg64fc*_ga*MTY0MTk4MjY3LjE2OTY5ODk1MDI.*_ga_CW55HF8NVT*MTY5NzMxOTQ5My40LjEuMTY5NzMxOTUyNi4yNy4wLjA." height="40" alt="Postdrop" style="border: none; -ms-interpolation-mode: bicubic; max-width: 100%;">
					</a>
				</td>
				</tr>
			</table>
			</div>
			<div class="content" style="box-sizing: border-box; display: block; Margin: 0 auto; max-width: 580px; padding: 10px;">

			<!-- START CENTERED WHITE CONTAINER -->
			<span class="preheader" style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;">This is preheader text. Some clients will show this text as a preview.</span>
			<table role="presentation" class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; background: #ffffff; border-radius: 3px; width: 100%;" width="100%">

				<!-- START MAIN CONTENT AREA -->
				<tr>
				<td class="wrapper" style="font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;" valign="top">
					<table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; width: 100%;" width="100%">
					<tr>
						<td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">
						<h1 align="center" style="color: #06090f; font-family: sans-serif; line-height: 1.4; margin: 0; margin-bottom: 30px; font-size: 35px; font-weight: 300; text-align: center; text-transform: capitalize;">${assunto}</h1>
						<p align="center" style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">${conteudo}</p>
						<h5 align="center" style="padding-top: 2rem;">${agradecimento}</h5>
						</td>
					</tr>
					<tr>
						<td class="align-center" width="100%" style="font-family: sans-serif; font-size: 14px; vertical-align: top; text-align: center;" valign="top" align="center">
						<a href="https://dbc-wiriswernek.vercel.app/" style="color: #ec0867; text-decoration: underline;">
							<img src="https://firebasestorage.googleapis.com/v0/b/digital-business-card-1785c.appspot.com/o/recursos-email%2FEmail-Assign.png?alt=media&token=be612eda-d32b-4f4a-bf89-d66b66621f96&_gl=1*uwj5b4*_ga*MTY0MTk4MjY3LjE2OTY5ODk1MDI.*_ga_CW55HF8NVT*MTY5NzMxMzgxMC4zLjEuMTY5NzMxNTQ5My42MC4wLjA." height="130" alt="Postdrop" style="border: none; -ms-interpolation-mode: bicubic; max-width: 100%;">
						</a>
						</td>
					</tr>
					</table>
				</td>
				</tr>

				<!-- END MAIN CONTENT AREA -->
			</table>

			<!-- START FOOTER -->
			<div class="footer" style="clear: both; Margin-top: 10px; text-align: center; width: 100%;">
				<table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; width: 100%;" width="100%">
				<tr>
					<td class="content-block powered-by" style="font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; color: #9a9ea6; font-size: 12px; text-align: center;" valign="top" align="center">
					Powered by <a href="https://postdrop.io" style="color: #9a9ea6; font-size: 12px; text-align: center; text-decoration: none;">Postdrop</a>.
					</td>
				</tr>
				</table>
			</div>
			<!-- END FOOTER -->

			<!-- END CENTERED WHITE CONTAINER -->
			</div>
		</td>
		<td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">&nbsp;</td>
		</tr>
	</table>
	</body>

	</html>
	`;
  }
}
