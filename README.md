# discourse-material-icons

Replacing Discourse's default icon set with Google Material Icons 

## (Optional) How to change the default `filled` icon style

There are 5 styles included:

- `filled` (Default)
- `outlined`
- `sharp`
- `rounded`
- `twotone`

To change from `filled` to another style has to be done manually for now. 

1. Download the `.svg` file of the style you want from the `/assets` folder locally
 - `outlined.svg`
 - `sharp.svg`
 - `rounded.svg`
 - `twotone.svg`

2. Go to `Admin > Customize > Components > discourse-material-icons > Uploads`
<img width="232" alt="image" src="https://user-images.githubusercontent.com/37538241/210022021-2a1f6740-e0ed-496e-b6fe-35d5f7e1b6ae.png">

3. Remove the default `$icons-sprite: filled.svg` 

<img width="596" alt="image" src="https://user-images.githubusercontent.com/37538241/210022325-4ecd7d06-d590-461c-a43d-dd35bb22a7ab.png">

4. Upload the `.svg` with the SCSS variable name `icons-sprite`

<img width="367" alt="image" src="https://user-images.githubusercontent.com/37538241/210022385-33885d1c-1b4f-4364-aea8-5665af8dd36a.png">

The icons should update upon refresh.
