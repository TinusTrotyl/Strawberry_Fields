//Dont change it
//Dont change it
requirejs(['ext_editor_io', 'jquery_190', 'raphael_210'],
    function (extIO, $) {
        
        function sfieldCanvas(dom, dataInp, explanation, dataAnswer) {

            function getArc(cx,cy,r,rad) {
                const x = cx+r*Math.cos(rad),
                      y = cy-r*Math.sin(rad);
                let path = '';
                
                return [["M",cx+r,cy], ["A",r,r,0,0,0,x,y]];
            }

            function createLinePath(x1, y1, x2, y2) {
                return "M" + x1 + "," + y1 + "L" + x2 + "," + y2;
            }

            const [a, b, c, d] = dataInp;
            const color = {
                blue: "#65A1CF",
                base: "#294270",
                orange: "#FAAB00",
                darkgray: "#696969",
            };

            const h_margin = 140;
            const t_margin = 10;
            const b_margin = 33;
            const stroke_width = 2;
            const attr = {
                line1: {
                    'stroke-width': stroke_width,
                    'stroke': color.orange,
                    'arrow-end': 'block-wide-long',
                },
                line2: {
                    'stroke-width': stroke_width,
                    'stroke': color.base,
                },
                text: {
                    degree: {
                        'stroke-width': 0,
                        'fill': color.orange,
                        "font-size": 12,
                        'font-family': "Verdana",
                        'text-anchor': "start",
                    },
                    explanation: {
                        'stroke-width': 0,
                        'fill': color.darkgray,
                        "font-size": 15,
                        'font-family': "Verdana",
                    },
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
            const canvas_width
                = dataAnswer ? width + h_margin: 300;
            const canvas_height
                = dataAnswer ? height + t_margin + b_margin: 90;
            const canvas = Raphael(dom, canvas_width, canvas_height, 0, 0);

            if (dataAnswer) {
                // draw lines
                const sx = 0 - x_min + h_margin / 2,
                      sy = canvas_height - b_margin;

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
                // arc
                canvas.path(
                        getArc(sx, sy, 10, angle_a)
                    ).attr({"stroke-width":1, 'stroke': color.orange}); 

                // degree text
                const tx = Math.cos(angle_a/2) * 15;
                const ty = Math.sin(angle_a/2) * 15;
                canvas.text(sx+tx, sy-ty-2,
                    dataAnswer + '°').attr(attr.text.degree);
            }

            // explanation text
            canvas.text(canvas_width / 2, canvas_height - 15,
                explanation).attr(attr.text.explanation);
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
