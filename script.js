abc = ''
text_to_fsh_array = ['f', 's', 'h', ' '];
fsh_to_text_array = { 'f': 0, 's': 1, 'h': 2, ' ': 3 };

function text_to_fsh()
{
    str = document.getElementById('textarea_text').value;
    fsh = '';
    [...str].forEach(i =>
    {
        abc = i.charCodeAt(0).toString(4);
        [...abc].forEach(j =>
        {
            fsh += text_to_fsh_array[j];
        });
    });
    document.getElementById('textarea_fsh').value = fsh;
    return fsh;
}

function fsh_to_text()
{
    fsh = document.getElementById('textarea_fsh').value;
    text = '';
    for (let i = 0; i < fsh.length; i += 4)
    {
        text += String.fromCharCode(parseInt(fsh_to_text_array[fsh[i]] * 1000 + fsh_to_text_array[fsh[i + 1]] * 100 + fsh_to_text_array[fsh[i + 2]] * 10 + fsh_to_text_array[fsh[i + 3]], 4));
    }
    document.getElementById('textarea_text').value = text;
    return text;
}