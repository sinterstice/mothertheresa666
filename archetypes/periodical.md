+++
date = '{{ .Date }}'
draft = true
title = '{{ replace .File.ContentBaseName "-" " " | title }}'
[params]
    size = 'single' # options are single, double, full
    type = 'text' # options are text, image, embed
    attachment = '' # if type = image, the absolute path to the image; if type = embed, the embed code
+++
