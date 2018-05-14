<html>
<head>
    <base target="_blank">
    <style type="text/css">
        ::-webkit-scrollbar {
            display: none;
        }
    </style>
    <style id="cloudAttachStyle" type="text/css">
        #divNeteaseBigAttach, #divNeteaseBigAttach_bak {
            display: none;
        }
    </style>

</head>
<body tabindex="0" role="listitem">


<table align="center" border="0" width="100%" bgcolor="#eaeaea" cellpadding="0" cellspacing="0"
       style="margin:0;padding:0;">
    <tbody>
    <tr>
        <td bgcolor="#eaeaea" style="padding: 0 0 75px;;margin:0;" width="100%">
            <table align="center" border="0" width="600" cellpadding="0" cellspacing="0">
                <tbody>
                <tr>
                    <td align="center" style="padding-top:62px; padding-right:0; padding-bottom:40px; padding-left:0;" width="100%">
                        <a href="{{ url('/') }}" target="_blank">
                            <img alt="{{ config('app.name') }}" src="{{ url('/images/logo.png') }}" border="0“ width="198"> </a></td>
                </tr>
                </tbody>
            </table>
            <table align="center" width="600" border="0" cellpadding="0" cellspacing="0" style="border: 0; padding:0;">
                <tbody>
                <tr>
                    <td align="left" bgcolor="#ffffff" style="padding:43px 50px 38px;margin:0;">
                        Hi:
                    </td>
                </tr>
                <tr>
                    <td align="left" bgcolor="#ffffff" style="padding:0 30px 33px 50px;margin:0;"><span
                                style="font-family:Helvetica,sans-serif;font-weight:300;font-size:18px;color:#373737;line-height:1.5;">用户 {{ $receive_user->name }} 回复了你:</span>
                    </td>
                </tr>
                <tr>
                    <td valign="top" bgcolor="#ffffff" align="center" style="margin:0;padding:0;">
                        <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%"
                               style="margin:0;padding:0;">
                            <tbody>
                            <tr>
                                <td valign="top" align="center" style="margin:0;padding:0;">
                                    <table border="0" cellpadding="0" cellspacing="0" align="center" width="314"
                                           style="margin:0;padding:0;">
                                        <tbody>
                                        <tr>
                                            <td valign="middle" align="center">{!! $comment->content->html !!}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td align="left" bgcolor="#ffffff" style="padding:36px 50px 42px;margin:0;"><span
                                style="font-family:Helvetica,sans-serif;font-weight:300;font-size:16px;color:#262626;line-height:1.8;">此致 <br>{{ config('app.name') }}</span>
                    </td>
                </tr>
                </tbody>
            </table>
        </td>
    </tr>
    </tbody>
</table>

<style type="text/css">
    body {
        font-size: 14px;
        font-family: arial, verdana, sans-serif;
        line-height: 1.666;
        padding: 0;
        margin: 0;
        overflow: auto;
        white-space: normal;
        word-wrap: break-word;
        min-height: 100px
    }

    td, input, button, select, body {
        font-family: Helvetica, 'Microsoft Yahei', verdana
    }

    pre {
        white-space: pre-wrap;
        white-space: -moz-pre-wrap;
        white-space: -pre-wrap;
        white-space: -o-pre-wrap;
        word-wrap: break-word;
        width: 95%
    }

    th, td {
        font-family: arial, verdana, sans-serif;
        line-height: 1.666
    }

    img {
        border: 0
    }

    header, footer, section, aside, article, nav, hgroup, figure, figcaption {
        display: block
    }

    blockquote {
        margin-right: 0px
    }
</style>

<style id="ntes_link_color" type="text/css">a, td a {
        color: #064977
    }</style>

</body>
</html>