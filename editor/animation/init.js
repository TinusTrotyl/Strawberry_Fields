//Dont change it
//Dont change it
requirejs(['ext_editor_io', 'jquery_190', 'raphael_210'],
    function (extIO, $) {
        
        function sfieldCanvas(dom, dataInp, explanation, dataAnswer) {

            const canvas_div = document.createElement('div');
            const [a, b, c, d] = dataInp;
            const color = {
                blue: "#65A1CF",
                base: "#294270",
                orange: "#FAAB00",
            };

            function createLinePath(x1, y1, x2, y2) {
                return "M" + x1 + "," + y1 + "L" + x2 + "," + y2;
            }

            const stroke_width = 2;
            const attr = {
                line1: {
                    'stroke-width': stroke_width,
                    'stroke': color.orange,
                    //'arrow-end': 'block-wide-long',
                },
                line2: {
                    'stroke-width': stroke_width,
                    'stroke': color.base,
                },
            };

            // target corner
            const angle_a = Math.acos((a**2 + d**2 - c**2 - b**2)
                                        / (2 * (a * d + c * b)));
            const ax = Math.cos(angle_a) * d;
            const ay = Math.sin(angle_a) * d;
            
            // other corner
            const angle_b = Math.acos((b**2 + a**2 - d**2 - c**2)
                                        / (2 * (b * a + d * c)));
            const bx = a - Math.cos(angle_b) * b;
            const by = Math.sin(angle_b) * b;

            const x_ary = [0, ax, bx, a];
            x_ary.sort((a, b)=>{return a-b});

            const x_min = x_ary[0];
            const x_max = x_ary[x_ary.length-1];
            const width = x_max - x_min;
            const height = Math.abs(ay > by ? ay: by);

            // canvas
            const canvas = Raphael(canvas_div, 
                dataAnswer ? width+stroke_width : 50, 
                dataAnswer ? height+stroke_width: 50,
                0, 0);

            if (dataAnswer) {
                // draw
                const sx = 0 - x_min + stroke_width / 2,
                      sy = height + stroke_width / 2;

                canvas.path(createLinePath(
                    sx, sy,
                    sx+a, sy)).attr(attr.line1);
                canvas.path(createLinePath(
                    sx, sy,
                    sx+ax, sy-ay)).attr(attr.line1);
                canvas.path(createLinePath(
                    sx+a, sy,
                    sx+bx, sy-by)).attr(attr.line2);
                canvas.path(createLinePath(
                    sx+ax, sy-ay,
                    sx+bx, sy-by)).attr(attr.line2);
            }

            dom.appendChild(canvas_div);

            // explanation text
            const text_p = document.createElement('p');
            text_p.innerHTML = explanation;
            text_p.style.textAlign = 'center';
            dom.appendChild(text_p);
        }

        var $tryit;

        var io = new extIO({
            multipleArguments: true,
            functions: {
                python: 'strawberryfield',
                js: 'strawberryfield'
            },

            animation: function($expl, data){
                sfieldCanvas(
                    $expl[0],
                    data.in,
                    data.ext.explanation,
                    data.ext.answer
                );
            },
        });
        io.start();
    }
);
