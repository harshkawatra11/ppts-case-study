# Independent model extension: T22 to T29

Frozen original model: 9b3628d94d. All company monetary fields ending _lakh are INR lakh; rates/shares are fractions; phone counts are expected delivered units. JSON floats are unrounded.

Tables below show numeric values to 12 significant digits for audit readability. Use JSON floats for calculations. Company totals in a submitted deck must be shown to one decimal lakh. Every table is generated from the same object as the JSON.

## T22. Delivered demand and sequential rationing by channel and grade

Inputs: Case E3 channel orders/mixes; E4b Superb 2000; E6 effects, trade-in arrivals and supply, H4 rationing order.

Cell definitions: {"demand": "orders before rationing", "post_superb": "demand multiplied by Superb factor for S only", "delivered": "post_superb multiplied by total lab factor", "lost_to_superb": "demand minus post_superb", "lost_to_lab": "post_superb minus delivered", "superb_factor": "min(1,available Superb / demanded Superb)", "lab_factor": "min(1,capacity / all post-Superb orders)"}

| case | plan | month | channel | grade | demand | post_superb | delivered | superb_factor | lab_factor | superb_capacity | lab_capacity | lost_to_superb | lost_to_lab |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Recommended | B1 + B2 + shift from Feb | Feb | ads | S | 606.528 | 585.915492958 | 585.915492958 | 0.966015572171 | 1 | 2000 | 9000 | 20.6125070423 | 0 |
| Recommended | B1 + B2 + shift from Feb | Feb | ads | G | 1213.056 | 1213.056 | 1213.056 | 0.966015572171 | 1 | 2000 | 9000 | 0 | 0 |
| Recommended | B1 + B2 + shift from Feb | Feb | ads | F | 1213.056 | 1213.056 | 1213.056 | 0.966015572171 | 1 | 2000 | 9000 | 0 | 0 |
| Recommended | B1 + B2 + shift from Feb | Feb | mk | S | 233.28 | 225.352112676 | 225.352112676 | 0.966015572171 | 1 | 2000 | 9000 | 7.92788732394 | 0 |
| Recommended | B1 + B2 + shift from Feb | Feb | mk | G | 1049.76 | 1049.76 | 1049.76 | 0.966015572171 | 1 | 2000 | 9000 | 0 | 0 |
| Recommended | B1 + B2 + shift from Feb | Feb | mk | F | 1049.76 | 1049.76 | 1049.76 | 0.966015572171 | 1 | 2000 | 9000 | 0 | 0 |
| Recommended | B1 + B2 + shift from Feb | Feb | cr | S | 419.904 | 405.633802817 | 405.633802817 | 0.966015572171 | 1 | 2000 | 9000 | 14.2701971831 | 0 |
| Recommended | B1 + B2 + shift from Feb | Feb | cr | G | 524.88 | 524.88 | 524.88 | 0.966015572171 | 1 | 2000 | 9000 | 0 | 0 |
| Recommended | B1 + B2 + shift from Feb | Feb | cr | F | 104.976 | 104.976 | 104.976 | 0.966015572171 | 1 | 2000 | 9000 | 0 | 0 |
| Recommended | B1 + B2 + shift from Feb | Feb | st | S | 524.88 | 507.042253521 | 507.042253521 | 0.966015572171 | 1 | 2000 | 9000 | 17.8377464789 | 0 |
| Recommended | B1 + B2 + shift from Feb | Feb | st | G | 524.88 | 524.88 | 524.88 | 0.966015572171 | 1 | 2000 | 9000 | 0 | 0 |
| Recommended | B1 + B2 + shift from Feb | Feb | st | F | 116.64 | 116.64 | 116.64 | 0.966015572171 | 1 | 2000 | 9000 | 0 | 0 |
| Recommended | B1 + B2 + shift from Feb | Feb | rf | S | 285.768 | 276.056338028 | 276.056338028 | 0.966015572171 | 1 | 2000 | 9000 | 9.71166197183 | 0 |
| Recommended | B1 + B2 + shift from Feb | Feb | rf | G | 408.24 | 408.24 | 408.24 | 0.966015572171 | 1 | 2000 | 9000 | 0 | 0 |
| Recommended | B1 + B2 + shift from Feb | Feb | rf | F | 122.472 | 122.472 | 122.472 | 0.966015572171 | 1 | 2000 | 9000 | 0 | 0 |
| Recommended | B1 + B2 + shift from Feb | Mar | ads | S | 606.528 | 585.915492958 | 585.915492958 | 0.966015572171 | 1 | 2000 | 9000 | 20.6125070423 | 0 |
| Recommended | B1 + B2 + shift from Feb | Mar | ads | G | 1213.056 | 1213.056 | 1213.056 | 0.966015572171 | 1 | 2000 | 9000 | 0 | 0 |
| Recommended | B1 + B2 + shift from Feb | Mar | ads | F | 1213.056 | 1213.056 | 1213.056 | 0.966015572171 | 1 | 2000 | 9000 | 0 | 0 |
| Recommended | B1 + B2 + shift from Feb | Mar | mk | S | 233.28 | 225.352112676 | 225.352112676 | 0.966015572171 | 1 | 2000 | 9000 | 7.92788732394 | 0 |
| Recommended | B1 + B2 + shift from Feb | Mar | mk | G | 1049.76 | 1049.76 | 1049.76 | 0.966015572171 | 1 | 2000 | 9000 | 0 | 0 |
| Recommended | B1 + B2 + shift from Feb | Mar | mk | F | 1049.76 | 1049.76 | 1049.76 | 0.966015572171 | 1 | 2000 | 9000 | 0 | 0 |
| Recommended | B1 + B2 + shift from Feb | Mar | cr | S | 419.904 | 405.633802817 | 405.633802817 | 0.966015572171 | 1 | 2000 | 9000 | 14.2701971831 | 0 |
| Recommended | B1 + B2 + shift from Feb | Mar | cr | G | 524.88 | 524.88 | 524.88 | 0.966015572171 | 1 | 2000 | 9000 | 0 | 0 |
| Recommended | B1 + B2 + shift from Feb | Mar | cr | F | 104.976 | 104.976 | 104.976 | 0.966015572171 | 1 | 2000 | 9000 | 0 | 0 |
| Recommended | B1 + B2 + shift from Feb | Mar | st | S | 524.88 | 507.042253521 | 507.042253521 | 0.966015572171 | 1 | 2000 | 9000 | 17.8377464789 | 0 |
| Recommended | B1 + B2 + shift from Feb | Mar | st | G | 524.88 | 524.88 | 524.88 | 0.966015572171 | 1 | 2000 | 9000 | 0 | 0 |
| Recommended | B1 + B2 + shift from Feb | Mar | st | F | 116.64 | 116.64 | 116.64 | 0.966015572171 | 1 | 2000 | 9000 | 0 | 0 |
| Recommended | B1 + B2 + shift from Feb | Mar | rf | S | 285.768 | 276.056338028 | 276.056338028 | 0.966015572171 | 1 | 2000 | 9000 | 9.71166197183 | 0 |
| Recommended | B1 + B2 + shift from Feb | Mar | rf | G | 408.24 | 408.24 | 408.24 | 0.966015572171 | 1 | 2000 | 9000 | 0 | 0 |
| Recommended | B1 + B2 + shift from Feb | Mar | rf | F | 122.472 | 122.472 | 122.472 | 0.966015572171 | 1 | 2000 | 9000 | 0 | 0 |
| Rohan price push | A | Feb | ads | S | 585 | 585 | 443.368421053 | 1 | 0.757894736842 | 2000 | 7200 | 0 | 141.631578947 |
| Rohan price push | A | Feb | ads | G | 1365 | 1365 | 1034.52631579 | 1 | 0.757894736842 | 2000 | 7200 | 0 | 330.473684211 |
| Rohan price push | A | Feb | ads | F | 1950 | 1950 | 1477.89473684 | 1 | 0.757894736842 | 2000 | 7200 | 0 | 472.105263158 |
| Rohan price push | A | Feb | mk | S | 150 | 150 | 113.684210526 | 1 | 0.757894736842 | 2000 | 7200 | 0 | 36.3157894737 |
| Rohan price push | A | Feb | mk | G | 1200 | 1200 | 909.473684211 | 1 | 0.757894736842 | 2000 | 7200 | 0 | 290.526315789 |
| Rohan price push | A | Feb | mk | F | 1650 | 1650 | 1250.52631579 | 1 | 0.757894736842 | 2000 | 7200 | 0 | 399.473684211 |
| Rohan price push | A | Feb | cr | S | 360 | 360 | 272.842105263 | 1 | 0.757894736842 | 2000 | 7200 | 0 | 87.1578947368 |
| Rohan price push | A | Feb | cr | G | 450 | 450 | 341.052631579 | 1 | 0.757894736842 | 2000 | 7200 | 0 | 108.947368421 |
| Rohan price push | A | Feb | cr | F | 90 | 90 | 68.2105263158 | 1 | 0.757894736842 | 2000 | 7200 | 0 | 21.7894736842 |
| Rohan price push | A | Feb | st | S | 450 | 450 | 341.052631579 | 1 | 0.757894736842 | 2000 | 7200 | 0 | 108.947368421 |
| Rohan price push | A | Feb | st | G | 450 | 450 | 341.052631579 | 1 | 0.757894736842 | 2000 | 7200 | 0 | 108.947368421 |
| Rohan price push | A | Feb | st | F | 100 | 100 | 75.7894736842 | 1 | 0.757894736842 | 2000 | 7200 | 0 | 24.2105263158 |
| Rohan price push | A | Feb | rf | S | 245 | 245 | 185.684210526 | 1 | 0.757894736842 | 2000 | 7200 | 0 | 59.3157894737 |
| Rohan price push | A | Feb | rf | G | 350 | 350 | 265.263157895 | 1 | 0.757894736842 | 2000 | 7200 | 0 | 84.7368421053 |
| Rohan price push | A | Feb | rf | F | 105 | 105 | 79.5789473684 | 1 | 0.757894736842 | 2000 | 7200 | 0 | 25.4210526316 |
| Rohan price push | A | Mar | ads | S | 585 | 585 | 443.368421053 | 1 | 0.757894736842 | 2000 | 7200 | 0 | 141.631578947 |
| Rohan price push | A | Mar | ads | G | 1365 | 1365 | 1034.52631579 | 1 | 0.757894736842 | 2000 | 7200 | 0 | 330.473684211 |
| Rohan price push | A | Mar | ads | F | 1950 | 1950 | 1477.89473684 | 1 | 0.757894736842 | 2000 | 7200 | 0 | 472.105263158 |
| Rohan price push | A | Mar | mk | S | 150 | 150 | 113.684210526 | 1 | 0.757894736842 | 2000 | 7200 | 0 | 36.3157894737 |
| Rohan price push | A | Mar | mk | G | 1200 | 1200 | 909.473684211 | 1 | 0.757894736842 | 2000 | 7200 | 0 | 290.526315789 |
| Rohan price push | A | Mar | mk | F | 1650 | 1650 | 1250.52631579 | 1 | 0.757894736842 | 2000 | 7200 | 0 | 399.473684211 |
| Rohan price push | A | Mar | cr | S | 360 | 360 | 272.842105263 | 1 | 0.757894736842 | 2000 | 7200 | 0 | 87.1578947368 |
| Rohan price push | A | Mar | cr | G | 450 | 450 | 341.052631579 | 1 | 0.757894736842 | 2000 | 7200 | 0 | 108.947368421 |
| Rohan price push | A | Mar | cr | F | 90 | 90 | 68.2105263158 | 1 | 0.757894736842 | 2000 | 7200 | 0 | 21.7894736842 |
| Rohan price push | A | Mar | st | S | 450 | 450 | 341.052631579 | 1 | 0.757894736842 | 2000 | 7200 | 0 | 108.947368421 |
| Rohan price push | A | Mar | st | G | 450 | 450 | 341.052631579 | 1 | 0.757894736842 | 2000 | 7200 | 0 | 108.947368421 |
| Rohan price push | A | Mar | st | F | 100 | 100 | 75.7894736842 | 1 | 0.757894736842 | 2000 | 7200 | 0 | 24.2105263158 |
| Rohan price push | A | Mar | rf | S | 245 | 245 | 185.684210526 | 1 | 0.757894736842 | 2000 | 7200 | 0 | 59.3157894737 |
| Rohan price push | A | Mar | rf | G | 350 | 350 | 265.263157895 | 1 | 0.757894736842 | 2000 | 7200 | 0 | 84.7368421053 |
| Rohan price push | A | Mar | rf | F | 105 | 105 | 79.5789473684 | 1 | 0.757894736842 | 2000 | 7200 | 0 | 25.4210526316 |
| Rohan price push with shift | A + shift from Feb | Feb | ads | S | 585 | 585 | 554.210526316 | 1 | 0.947368421053 | 2000 | 9000 | 0 | 30.7894736842 |
| Rohan price push with shift | A + shift from Feb | Feb | ads | G | 1365 | 1365 | 1293.15789474 | 1 | 0.947368421053 | 2000 | 9000 | 0 | 71.8421052632 |
| Rohan price push with shift | A + shift from Feb | Feb | ads | F | 1950 | 1950 | 1847.36842105 | 1 | 0.947368421053 | 2000 | 9000 | 0 | 102.631578947 |
| Rohan price push with shift | A + shift from Feb | Feb | mk | S | 150 | 150 | 142.105263158 | 1 | 0.947368421053 | 2000 | 9000 | 0 | 7.89473684211 |
| Rohan price push with shift | A + shift from Feb | Feb | mk | G | 1200 | 1200 | 1136.84210526 | 1 | 0.947368421053 | 2000 | 9000 | 0 | 63.1578947368 |
| Rohan price push with shift | A + shift from Feb | Feb | mk | F | 1650 | 1650 | 1563.15789474 | 1 | 0.947368421053 | 2000 | 9000 | 0 | 86.8421052632 |
| Rohan price push with shift | A + shift from Feb | Feb | cr | S | 360 | 360 | 341.052631579 | 1 | 0.947368421053 | 2000 | 9000 | 0 | 18.9473684211 |
| Rohan price push with shift | A + shift from Feb | Feb | cr | G | 450 | 450 | 426.315789474 | 1 | 0.947368421053 | 2000 | 9000 | 0 | 23.6842105263 |
| Rohan price push with shift | A + shift from Feb | Feb | cr | F | 90 | 90 | 85.2631578947 | 1 | 0.947368421053 | 2000 | 9000 | 0 | 4.73684210526 |
| Rohan price push with shift | A + shift from Feb | Feb | st | S | 450 | 450 | 426.315789474 | 1 | 0.947368421053 | 2000 | 9000 | 0 | 23.6842105263 |
| Rohan price push with shift | A + shift from Feb | Feb | st | G | 450 | 450 | 426.315789474 | 1 | 0.947368421053 | 2000 | 9000 | 0 | 23.6842105263 |
| Rohan price push with shift | A + shift from Feb | Feb | st | F | 100 | 100 | 94.7368421053 | 1 | 0.947368421053 | 2000 | 9000 | 0 | 5.26315789474 |
| Rohan price push with shift | A + shift from Feb | Feb | rf | S | 245 | 245 | 232.105263158 | 1 | 0.947368421053 | 2000 | 9000 | 0 | 12.8947368421 |
| Rohan price push with shift | A + shift from Feb | Feb | rf | G | 350 | 350 | 331.578947368 | 1 | 0.947368421053 | 2000 | 9000 | 0 | 18.4210526316 |
| Rohan price push with shift | A + shift from Feb | Feb | rf | F | 105 | 105 | 99.4736842105 | 1 | 0.947368421053 | 2000 | 9000 | 0 | 5.52631578947 |
| Rohan price push with shift | A + shift from Feb | Mar | ads | S | 585 | 585 | 554.210526316 | 1 | 0.947368421053 | 2000 | 9000 | 0 | 30.7894736842 |
| Rohan price push with shift | A + shift from Feb | Mar | ads | G | 1365 | 1365 | 1293.15789474 | 1 | 0.947368421053 | 2000 | 9000 | 0 | 71.8421052632 |
| Rohan price push with shift | A + shift from Feb | Mar | ads | F | 1950 | 1950 | 1847.36842105 | 1 | 0.947368421053 | 2000 | 9000 | 0 | 102.631578947 |
| Rohan price push with shift | A + shift from Feb | Mar | mk | S | 150 | 150 | 142.105263158 | 1 | 0.947368421053 | 2000 | 9000 | 0 | 7.89473684211 |
| Rohan price push with shift | A + shift from Feb | Mar | mk | G | 1200 | 1200 | 1136.84210526 | 1 | 0.947368421053 | 2000 | 9000 | 0 | 63.1578947368 |
| Rohan price push with shift | A + shift from Feb | Mar | mk | F | 1650 | 1650 | 1563.15789474 | 1 | 0.947368421053 | 2000 | 9000 | 0 | 86.8421052632 |
| Rohan price push with shift | A + shift from Feb | Mar | cr | S | 360 | 360 | 341.052631579 | 1 | 0.947368421053 | 2000 | 9000 | 0 | 18.9473684211 |
| Rohan price push with shift | A + shift from Feb | Mar | cr | G | 450 | 450 | 426.315789474 | 1 | 0.947368421053 | 2000 | 9000 | 0 | 23.6842105263 |
| Rohan price push with shift | A + shift from Feb | Mar | cr | F | 90 | 90 | 85.2631578947 | 1 | 0.947368421053 | 2000 | 9000 | 0 | 4.73684210526 |
| Rohan price push with shift | A + shift from Feb | Mar | st | S | 450 | 450 | 426.315789474 | 1 | 0.947368421053 | 2000 | 9000 | 0 | 23.6842105263 |
| Rohan price push with shift | A + shift from Feb | Mar | st | G | 450 | 450 | 426.315789474 | 1 | 0.947368421053 | 2000 | 9000 | 0 | 23.6842105263 |
| Rohan price push with shift | A + shift from Feb | Mar | st | F | 100 | 100 | 94.7368421053 | 1 | 0.947368421053 | 2000 | 9000 | 0 | 5.26315789474 |
| Rohan price push with shift | A + shift from Feb | Mar | rf | S | 245 | 245 | 232.105263158 | 1 | 0.947368421053 | 2000 | 9000 | 0 | 12.8947368421 |
| Rohan price push with shift | A + shift from Feb | Mar | rf | G | 350 | 350 | 331.578947368 | 1 | 0.947368421053 | 2000 | 9000 | 0 | 18.4210526316 |
| Rohan price push with shift | A + shift from Feb | Mar | rf | F | 105 | 105 | 99.4736842105 | 1 | 0.947368421053 | 2000 | 9000 | 0 | 5.52631578947 |
| Kabir report and warranty without shift | B1 + B2 | Feb | ads | S | 606.528 | 585.915492958 | 506.572212958 | 0.966015572171 | 0.864582382693 | 2000 | 7200 | 20.6125070423 | 79.3432799996 |
| Kabir report and warranty without shift | B1 + B2 | Feb | ads | G | 1213.056 | 1213.056 | 1048.78684682 | 0.966015572171 | 0.864582382693 | 2000 | 7200 | 0 | 164.26915318 |
| Kabir report and warranty without shift | B1 + B2 | Feb | ads | F | 1213.056 | 1213.056 | 1048.78684682 | 0.966015572171 | 0.864582382693 | 2000 | 7200 | 0 | 164.26915318 |
| Kabir report and warranty without shift | B1 + B2 | Feb | mk | S | 233.28 | 225.352112676 | 194.835466522 | 0.966015572171 | 0.864582382693 | 2000 | 7200 | 7.92788732394 | 30.5166461537 |
| Kabir report and warranty without shift | B1 + B2 | Feb | mk | G | 1049.76 | 1049.76 | 907.604002056 | 0.966015572171 | 0.864582382693 | 2000 | 7200 | 0 | 142.155997944 |
| Kabir report and warranty without shift | B1 + B2 | Feb | mk | F | 1049.76 | 1049.76 | 907.604002056 | 0.966015572171 | 0.864582382693 | 2000 | 7200 | 0 | 142.155997944 |
| Kabir report and warranty without shift | B1 + B2 | Feb | cr | S | 419.904 | 405.633802817 | 350.70383974 | 0.966015572171 | 0.864582382693 | 2000 | 7200 | 14.2701971831 | 54.9299630766 |
| Kabir report and warranty without shift | B1 + B2 | Feb | cr | G | 524.88 | 524.88 | 453.802001028 | 0.966015572171 | 0.864582382693 | 2000 | 7200 | 0 | 71.0779989721 |
| Kabir report and warranty without shift | B1 + B2 | Feb | cr | F | 104.976 | 104.976 | 90.7604002056 | 0.966015572171 | 0.864582382693 | 2000 | 7200 | 0 | 14.2155997944 |
| Kabir report and warranty without shift | B1 + B2 | Feb | st | S | 524.88 | 507.042253521 | 438.379799675 | 0.966015572171 | 0.864582382693 | 2000 | 7200 | 17.8377464789 | 68.6624538458 |
| Kabir report and warranty without shift | B1 + B2 | Feb | st | G | 524.88 | 524.88 | 453.802001028 | 0.966015572171 | 0.864582382693 | 2000 | 7200 | 0 | 71.0779989721 |
| Kabir report and warranty without shift | B1 + B2 | Feb | st | F | 116.64 | 116.64 | 100.844889117 | 0.966015572171 | 0.864582382693 | 2000 | 7200 | 0 | 15.7951108827 |
| Kabir report and warranty without shift | B1 + B2 | Feb | rf | S | 285.768 | 276.056338028 | 238.67344649 | 0.966015572171 | 0.864582382693 | 2000 | 7200 | 9.71166197183 | 37.3828915383 |
| Kabir report and warranty without shift | B1 + B2 | Feb | rf | G | 408.24 | 408.24 | 352.957111911 | 0.966015572171 | 0.864582382693 | 2000 | 7200 | 0 | 55.2828880894 |
| Kabir report and warranty without shift | B1 + B2 | Feb | rf | F | 122.472 | 122.472 | 105.887133573 | 0.966015572171 | 0.864582382693 | 2000 | 7200 | 0 | 16.5848664268 |
| Kabir report and warranty without shift | B1 + B2 | Mar | ads | S | 606.528 | 585.915492958 | 506.572212958 | 0.966015572171 | 0.864582382693 | 2000 | 7200 | 20.6125070423 | 79.3432799996 |
| Kabir report and warranty without shift | B1 + B2 | Mar | ads | G | 1213.056 | 1213.056 | 1048.78684682 | 0.966015572171 | 0.864582382693 | 2000 | 7200 | 0 | 164.26915318 |
| Kabir report and warranty without shift | B1 + B2 | Mar | ads | F | 1213.056 | 1213.056 | 1048.78684682 | 0.966015572171 | 0.864582382693 | 2000 | 7200 | 0 | 164.26915318 |
| Kabir report and warranty without shift | B1 + B2 | Mar | mk | S | 233.28 | 225.352112676 | 194.835466522 | 0.966015572171 | 0.864582382693 | 2000 | 7200 | 7.92788732394 | 30.5166461537 |
| Kabir report and warranty without shift | B1 + B2 | Mar | mk | G | 1049.76 | 1049.76 | 907.604002056 | 0.966015572171 | 0.864582382693 | 2000 | 7200 | 0 | 142.155997944 |
| Kabir report and warranty without shift | B1 + B2 | Mar | mk | F | 1049.76 | 1049.76 | 907.604002056 | 0.966015572171 | 0.864582382693 | 2000 | 7200 | 0 | 142.155997944 |
| Kabir report and warranty without shift | B1 + B2 | Mar | cr | S | 419.904 | 405.633802817 | 350.70383974 | 0.966015572171 | 0.864582382693 | 2000 | 7200 | 14.2701971831 | 54.9299630766 |
| Kabir report and warranty without shift | B1 + B2 | Mar | cr | G | 524.88 | 524.88 | 453.802001028 | 0.966015572171 | 0.864582382693 | 2000 | 7200 | 0 | 71.0779989721 |
| Kabir report and warranty without shift | B1 + B2 | Mar | cr | F | 104.976 | 104.976 | 90.7604002056 | 0.966015572171 | 0.864582382693 | 2000 | 7200 | 0 | 14.2155997944 |
| Kabir report and warranty without shift | B1 + B2 | Mar | st | S | 524.88 | 507.042253521 | 438.379799675 | 0.966015572171 | 0.864582382693 | 2000 | 7200 | 17.8377464789 | 68.6624538458 |
| Kabir report and warranty without shift | B1 + B2 | Mar | st | G | 524.88 | 524.88 | 453.802001028 | 0.966015572171 | 0.864582382693 | 2000 | 7200 | 0 | 71.0779989721 |
| Kabir report and warranty without shift | B1 + B2 | Mar | st | F | 116.64 | 116.64 | 100.844889117 | 0.966015572171 | 0.864582382693 | 2000 | 7200 | 0 | 15.7951108827 |
| Kabir report and warranty without shift | B1 + B2 | Mar | rf | S | 285.768 | 276.056338028 | 238.67344649 | 0.966015572171 | 0.864582382693 | 2000 | 7200 | 9.71166197183 | 37.3828915383 |
| Kabir report and warranty without shift | B1 + B2 | Mar | rf | G | 408.24 | 408.24 | 352.957111911 | 0.966015572171 | 0.864582382693 | 2000 | 7200 | 0 | 55.2828880894 |
| Kabir report and warranty without shift | B1 + B2 | Mar | rf | F | 122.472 | 122.472 | 105.887133573 | 0.966015572171 | 0.864582382693 | 2000 | 7200 | 0 | 16.5848664268 |
| Store managers trade in | C | Feb | ads | S | 520 | 520 | 499.2 | 1 | 0.96 | 2255 | 7200 | 0 | 20.8 |
| Store managers trade in | C | Feb | ads | G | 1040 | 1040 | 998.4 | 1 | 0.96 | 2255 | 7200 | 0 | 41.6 |
| Store managers trade in | C | Feb | ads | F | 1040 | 1040 | 998.4 | 1 | 0.96 | 2255 | 7200 | 0 | 41.6 |
| Store managers trade in | C | Feb | mk | S | 200 | 200 | 192 | 1 | 0.96 | 2255 | 7200 | 0 | 8 |
| Store managers trade in | C | Feb | mk | G | 900 | 900 | 864 | 1 | 0.96 | 2255 | 7200 | 0 | 36 |
| Store managers trade in | C | Feb | mk | F | 900 | 900 | 864 | 1 | 0.96 | 2255 | 7200 | 0 | 36 |
| Store managers trade in | C | Feb | cr | S | 360 | 360 | 345.6 | 1 | 0.96 | 2255 | 7200 | 0 | 14.4 |
| Store managers trade in | C | Feb | cr | G | 450 | 450 | 432 | 1 | 0.96 | 2255 | 7200 | 0 | 18 |
| Store managers trade in | C | Feb | cr | F | 90 | 90 | 86.4 | 1 | 0.96 | 2255 | 7200 | 0 | 3.6 |
| Store managers trade in | C | Feb | st | S | 450 | 450 | 432 | 1 | 0.96 | 2255 | 7200 | 0 | 18 |
| Store managers trade in | C | Feb | st | G | 450 | 450 | 432 | 1 | 0.96 | 2255 | 7200 | 0 | 18 |
| Store managers trade in | C | Feb | st | F | 100 | 100 | 96 | 1 | 0.96 | 2255 | 7200 | 0 | 4 |
| Store managers trade in | C | Feb | rf | S | 245 | 245 | 235.2 | 1 | 0.96 | 2255 | 7200 | 0 | 9.8 |
| Store managers trade in | C | Feb | rf | G | 350 | 350 | 336 | 1 | 0.96 | 2255 | 7200 | 0 | 14 |
| Store managers trade in | C | Feb | rf | F | 105 | 105 | 100.8 | 1 | 0.96 | 2255 | 7200 | 0 | 4.2 |
| Store managers trade in | C | Feb | ti | S | 120 | 120 | 115.2 | 1 | 0.96 | 2255 | 7200 | 0 | 4.8 |
| Store managers trade in | C | Feb | ti | G | 150 | 150 | 144 | 1 | 0.96 | 2255 | 7200 | 0 | 6 |
| Store managers trade in | C | Feb | ti | F | 30 | 30 | 28.8 | 1 | 0.96 | 2255 | 7200 | 0 | 1.2 |
| Store managers trade in | C | Mar | ads | S | 520 | 520 | 483.720930233 | 1 | 0.93023255814 | 2459 | 7200 | 0 | 36.2790697674 |
| Store managers trade in | C | Mar | ads | G | 1040 | 1040 | 967.441860465 | 1 | 0.93023255814 | 2459 | 7200 | 0 | 72.5581395349 |
| Store managers trade in | C | Mar | ads | F | 1040 | 1040 | 967.441860465 | 1 | 0.93023255814 | 2459 | 7200 | 0 | 72.5581395349 |
| Store managers trade in | C | Mar | mk | S | 200 | 200 | 186.046511628 | 1 | 0.93023255814 | 2459 | 7200 | 0 | 13.9534883721 |
| Store managers trade in | C | Mar | mk | G | 900 | 900 | 837.209302326 | 1 | 0.93023255814 | 2459 | 7200 | 0 | 62.7906976744 |
| Store managers trade in | C | Mar | mk | F | 900 | 900 | 837.209302326 | 1 | 0.93023255814 | 2459 | 7200 | 0 | 62.7906976744 |
| Store managers trade in | C | Mar | cr | S | 360 | 360 | 334.88372093 | 1 | 0.93023255814 | 2459 | 7200 | 0 | 25.1162790698 |
| Store managers trade in | C | Mar | cr | G | 450 | 450 | 418.604651163 | 1 | 0.93023255814 | 2459 | 7200 | 0 | 31.3953488372 |
| Store managers trade in | C | Mar | cr | F | 90 | 90 | 83.7209302326 | 1 | 0.93023255814 | 2459 | 7200 | 0 | 6.27906976744 |
| Store managers trade in | C | Mar | st | S | 450 | 450 | 418.604651163 | 1 | 0.93023255814 | 2459 | 7200 | 0 | 31.3953488372 |
| Store managers trade in | C | Mar | st | G | 450 | 450 | 418.604651163 | 1 | 0.93023255814 | 2459 | 7200 | 0 | 31.3953488372 |
| Store managers trade in | C | Mar | st | F | 100 | 100 | 93.023255814 | 1 | 0.93023255814 | 2459 | 7200 | 0 | 6.97674418605 |
| Store managers trade in | C | Mar | rf | S | 245 | 245 | 227.906976744 | 1 | 0.93023255814 | 2459 | 7200 | 0 | 17.0930232558 |
| Store managers trade in | C | Mar | rf | G | 350 | 350 | 325.581395349 | 1 | 0.93023255814 | 2459 | 7200 | 0 | 24.4186046512 |
| Store managers trade in | C | Mar | rf | F | 105 | 105 | 97.6744186047 | 1 | 0.93023255814 | 2459 | 7200 | 0 | 7.32558139535 |
| Store managers trade in | C | Mar | ti | S | 216 | 216 | 200.930232558 | 1 | 0.93023255814 | 2459 | 7200 | 0 | 15.0697674419 |
| Store managers trade in | C | Mar | ti | G | 270 | 270 | 251.162790698 | 1 | 0.93023255814 | 2459 | 7200 | 0 | 18.8372093023 |
| Store managers trade in | C | Mar | ti | F | 54 | 54 | 50.2325581395 | 1 | 0.93023255814 | 2459 | 7200 | 0 | 3.76744186047 |
| Battery promise without report | B2 + shift from Feb | Feb | ads | S | 561.6 | 561.6 | 561.6 | 1 | 1 | 2000 | 9000 | 0 | 0 |
| Battery promise without report | B2 + shift from Feb | Feb | ads | G | 1123.2 | 1123.2 | 1123.2 | 1 | 1 | 2000 | 9000 | 0 | 0 |
| Battery promise without report | B2 + shift from Feb | Feb | ads | F | 1123.2 | 1123.2 | 1123.2 | 1 | 1 | 2000 | 9000 | 0 | 0 |
| Battery promise without report | B2 + shift from Feb | Feb | mk | S | 216 | 216 | 216 | 1 | 1 | 2000 | 9000 | 0 | 0 |
| Battery promise without report | B2 + shift from Feb | Feb | mk | G | 972 | 972 | 972 | 1 | 1 | 2000 | 9000 | 0 | 0 |
| Battery promise without report | B2 + shift from Feb | Feb | mk | F | 972 | 972 | 972 | 1 | 1 | 2000 | 9000 | 0 | 0 |
| Battery promise without report | B2 + shift from Feb | Feb | cr | S | 388.8 | 388.8 | 388.8 | 1 | 1 | 2000 | 9000 | 0 | 0 |
| Battery promise without report | B2 + shift from Feb | Feb | cr | G | 486 | 486 | 486 | 1 | 1 | 2000 | 9000 | 0 | 0 |
| Battery promise without report | B2 + shift from Feb | Feb | cr | F | 97.2 | 97.2 | 97.2 | 1 | 1 | 2000 | 9000 | 0 | 0 |
| Battery promise without report | B2 + shift from Feb | Feb | st | S | 486 | 486 | 486 | 1 | 1 | 2000 | 9000 | 0 | 0 |
| Battery promise without report | B2 + shift from Feb | Feb | st | G | 486 | 486 | 486 | 1 | 1 | 2000 | 9000 | 0 | 0 |
| Battery promise without report | B2 + shift from Feb | Feb | st | F | 108 | 108 | 108 | 1 | 1 | 2000 | 9000 | 0 | 0 |
| Battery promise without report | B2 + shift from Feb | Feb | rf | S | 264.6 | 264.6 | 264.6 | 1 | 1 | 2000 | 9000 | 0 | 0 |
| Battery promise without report | B2 + shift from Feb | Feb | rf | G | 378 | 378 | 378 | 1 | 1 | 2000 | 9000 | 0 | 0 |
| Battery promise without report | B2 + shift from Feb | Feb | rf | F | 113.4 | 113.4 | 113.4 | 1 | 1 | 2000 | 9000 | 0 | 0 |
| Battery promise without report | B2 + shift from Feb | Mar | ads | S | 561.6 | 561.6 | 561.6 | 1 | 1 | 2000 | 9000 | 0 | 0 |
| Battery promise without report | B2 + shift from Feb | Mar | ads | G | 1123.2 | 1123.2 | 1123.2 | 1 | 1 | 2000 | 9000 | 0 | 0 |
| Battery promise without report | B2 + shift from Feb | Mar | ads | F | 1123.2 | 1123.2 | 1123.2 | 1 | 1 | 2000 | 9000 | 0 | 0 |
| Battery promise without report | B2 + shift from Feb | Mar | mk | S | 216 | 216 | 216 | 1 | 1 | 2000 | 9000 | 0 | 0 |
| Battery promise without report | B2 + shift from Feb | Mar | mk | G | 972 | 972 | 972 | 1 | 1 | 2000 | 9000 | 0 | 0 |
| Battery promise without report | B2 + shift from Feb | Mar | mk | F | 972 | 972 | 972 | 1 | 1 | 2000 | 9000 | 0 | 0 |
| Battery promise without report | B2 + shift from Feb | Mar | cr | S | 388.8 | 388.8 | 388.8 | 1 | 1 | 2000 | 9000 | 0 | 0 |
| Battery promise without report | B2 + shift from Feb | Mar | cr | G | 486 | 486 | 486 | 1 | 1 | 2000 | 9000 | 0 | 0 |
| Battery promise without report | B2 + shift from Feb | Mar | cr | F | 97.2 | 97.2 | 97.2 | 1 | 1 | 2000 | 9000 | 0 | 0 |
| Battery promise without report | B2 + shift from Feb | Mar | st | S | 486 | 486 | 486 | 1 | 1 | 2000 | 9000 | 0 | 0 |
| Battery promise without report | B2 + shift from Feb | Mar | st | G | 486 | 486 | 486 | 1 | 1 | 2000 | 9000 | 0 | 0 |
| Battery promise without report | B2 + shift from Feb | Mar | st | F | 108 | 108 | 108 | 1 | 1 | 2000 | 9000 | 0 | 0 |
| Battery promise without report | B2 + shift from Feb | Mar | rf | S | 264.6 | 264.6 | 264.6 | 1 | 1 | 2000 | 9000 | 0 | 0 |
| Battery promise without report | B2 + shift from Feb | Mar | rf | G | 378 | 378 | 378 | 1 | 1 | 2000 | 9000 | 0 | 0 |
| Battery promise without report | B2 + shift from Feb | Mar | rf | F | 113.4 | 113.4 | 113.4 | 1 | 1 | 2000 | 9000 | 0 | 0 |
| Report warranty and trade in without shift | B1 + B2 + C | Feb | ads | S | 606.528 | 606.528 | 502.06500745 | 1 | 0.827768886927 | 2255 | 7200 | 0 | 104.46299255 |
| Report warranty and trade in without shift | B1 + B2 + C | Feb | ads | G | 1213.056 | 1213.056 | 1004.1300149 | 1 | 0.827768886927 | 2255 | 7200 | 0 | 208.9259851 |
| Report warranty and trade in without shift | B1 + B2 + C | Feb | ads | F | 1213.056 | 1213.056 | 1004.1300149 | 1 | 0.827768886927 | 2255 | 7200 | 0 | 208.9259851 |
| Report warranty and trade in without shift | B1 + B2 + C | Feb | mk | S | 233.28 | 233.28 | 193.101925942 | 1 | 0.827768886927 | 2255 | 7200 | 0 | 40.1780740577 |
| Report warranty and trade in without shift | B1 + B2 + C | Feb | mk | G | 1049.76 | 1049.76 | 868.95866674 | 1 | 0.827768886927 | 2255 | 7200 | 0 | 180.80133326 |
| Report warranty and trade in without shift | B1 + B2 + C | Feb | mk | F | 1049.76 | 1049.76 | 868.95866674 | 1 | 0.827768886927 | 2255 | 7200 | 0 | 180.80133326 |
| Report warranty and trade in without shift | B1 + B2 + C | Feb | cr | S | 419.904 | 419.904 | 347.583466696 | 1 | 0.827768886927 | 2255 | 7200 | 0 | 72.3205333039 |
| Report warranty and trade in without shift | B1 + B2 + C | Feb | cr | G | 524.88 | 524.88 | 434.47933337 | 1 | 0.827768886927 | 2255 | 7200 | 0 | 90.4006666299 |
| Report warranty and trade in without shift | B1 + B2 + C | Feb | cr | F | 104.976 | 104.976 | 86.895866674 | 1 | 0.827768886927 | 2255 | 7200 | 0 | 18.080133326 |
| Report warranty and trade in without shift | B1 + B2 + C | Feb | st | S | 524.88 | 524.88 | 434.47933337 | 1 | 0.827768886927 | 2255 | 7200 | 0 | 90.4006666299 |
| Report warranty and trade in without shift | B1 + B2 + C | Feb | st | G | 524.88 | 524.88 | 434.47933337 | 1 | 0.827768886927 | 2255 | 7200 | 0 | 90.4006666299 |
| Report warranty and trade in without shift | B1 + B2 + C | Feb | st | F | 116.64 | 116.64 | 96.5509629711 | 1 | 0.827768886927 | 2255 | 7200 | 0 | 20.0890370289 |
| Report warranty and trade in without shift | B1 + B2 + C | Feb | rf | S | 285.768 | 285.768 | 236.549859279 | 1 | 0.827768886927 | 2255 | 7200 | 0 | 49.2181407207 |
| Report warranty and trade in without shift | B1 + B2 + C | Feb | rf | G | 408.24 | 408.24 | 337.928370399 | 1 | 0.827768886927 | 2255 | 7200 | 0 | 70.311629601 |
| Report warranty and trade in without shift | B1 + B2 + C | Feb | rf | F | 122.472 | 122.472 | 101.37851112 | 1 | 0.827768886927 | 2255 | 7200 | 0 | 21.0934888803 |
| Report warranty and trade in without shift | B1 + B2 + C | Feb | ti | S | 120 | 120 | 99.3322664312 | 1 | 0.827768886927 | 2255 | 7200 | 0 | 20.6677335688 |
| Report warranty and trade in without shift | B1 + B2 + C | Feb | ti | G | 150 | 150 | 124.165333039 | 1 | 0.827768886927 | 2255 | 7200 | 0 | 25.834666961 |
| Report warranty and trade in without shift | B1 + B2 + C | Feb | ti | F | 30 | 30 | 24.8330666078 | 1 | 0.827768886927 | 2255 | 7200 | 0 | 5.1669333922 |
| Report warranty and trade in without shift | B1 + B2 + C | Mar | ads | S | 606.528 | 606.528 | 488.583856936 | 1 | 0.805542129853 | 2459 | 7200 | 0 | 117.944143064 |
| Report warranty and trade in without shift | B1 + B2 + C | Mar | ads | G | 1213.056 | 1213.056 | 977.167713871 | 1 | 0.805542129853 | 2459 | 7200 | 0 | 235.888286129 |
| Report warranty and trade in without shift | B1 + B2 + C | Mar | ads | F | 1213.056 | 1213.056 | 977.167713871 | 1 | 0.805542129853 | 2459 | 7200 | 0 | 235.888286129 |
| Report warranty and trade in without shift | B1 + B2 + C | Mar | mk | S | 233.28 | 233.28 | 187.916868052 | 1 | 0.805542129853 | 2459 | 7200 | 0 | 45.3631319478 |
| Report warranty and trade in without shift | B1 + B2 + C | Mar | mk | G | 1049.76 | 1049.76 | 845.625906235 | 1 | 0.805542129853 | 2459 | 7200 | 0 | 204.134093765 |
| Report warranty and trade in without shift | B1 + B2 + C | Mar | mk | F | 1049.76 | 1049.76 | 845.625906235 | 1 | 0.805542129853 | 2459 | 7200 | 0 | 204.134093765 |
| Report warranty and trade in without shift | B1 + B2 + C | Mar | cr | S | 419.904 | 419.904 | 338.250362494 | 1 | 0.805542129853 | 2459 | 7200 | 0 | 81.653637506 |
| Report warranty and trade in without shift | B1 + B2 + C | Mar | cr | G | 524.88 | 524.88 | 422.812953117 | 1 | 0.805542129853 | 2459 | 7200 | 0 | 102.067046883 |
| Report warranty and trade in without shift | B1 + B2 + C | Mar | cr | F | 104.976 | 104.976 | 84.5625906235 | 1 | 0.805542129853 | 2459 | 7200 | 0 | 20.4134093765 |
| Report warranty and trade in without shift | B1 + B2 + C | Mar | st | S | 524.88 | 524.88 | 422.812953117 | 1 | 0.805542129853 | 2459 | 7200 | 0 | 102.067046883 |
| Report warranty and trade in without shift | B1 + B2 + C | Mar | st | G | 524.88 | 524.88 | 422.812953117 | 1 | 0.805542129853 | 2459 | 7200 | 0 | 102.067046883 |
| Report warranty and trade in without shift | B1 + B2 + C | Mar | st | F | 116.64 | 116.64 | 93.9584340261 | 1 | 0.805542129853 | 2459 | 7200 | 0 | 22.6815659739 |
| Report warranty and trade in without shift | B1 + B2 + C | Mar | rf | S | 285.768 | 285.768 | 230.198163364 | 1 | 0.805542129853 | 2459 | 7200 | 0 | 55.5698366361 |
| Report warranty and trade in without shift | B1 + B2 + C | Mar | rf | G | 408.24 | 408.24 | 328.854519091 | 1 | 0.805542129853 | 2459 | 7200 | 0 | 79.3854809087 |
| Report warranty and trade in without shift | B1 + B2 + C | Mar | rf | F | 122.472 | 122.472 | 98.6563557274 | 1 | 0.805542129853 | 2459 | 7200 | 0 | 23.8156442726 |
| Report warranty and trade in without shift | B1 + B2 + C | Mar | ti | S | 216 | 216 | 173.997100048 | 1 | 0.805542129853 | 2459 | 7200 | 0 | 42.0028999517 |
| Report warranty and trade in without shift | B1 + B2 + C | Mar | ti | G | 270 | 270 | 217.49637506 | 1 | 0.805542129853 | 2459 | 7200 | 0 | 52.5036249396 |
| Report warranty and trade in without shift | B1 + B2 + C | Mar | ti | F | 54 | 54 | 43.4992750121 | 1 | 0.805542129853 | 2459 | 7200 | 0 | 10.5007249879 |
| Report warranty and trade in with shift | B1 + B2 + C + shift from Feb | Feb | ads | S | 606.528 | 606.528 | 606.528 | 1 | 1 | 2255 | 9000 | 0 | 0 |
| Report warranty and trade in with shift | B1 + B2 + C + shift from Feb | Feb | ads | G | 1213.056 | 1213.056 | 1213.056 | 1 | 1 | 2255 | 9000 | 0 | 0 |
| Report warranty and trade in with shift | B1 + B2 + C + shift from Feb | Feb | ads | F | 1213.056 | 1213.056 | 1213.056 | 1 | 1 | 2255 | 9000 | 0 | 0 |
| Report warranty and trade in with shift | B1 + B2 + C + shift from Feb | Feb | mk | S | 233.28 | 233.28 | 233.28 | 1 | 1 | 2255 | 9000 | 0 | 0 |
| Report warranty and trade in with shift | B1 + B2 + C + shift from Feb | Feb | mk | G | 1049.76 | 1049.76 | 1049.76 | 1 | 1 | 2255 | 9000 | 0 | 0 |
| Report warranty and trade in with shift | B1 + B2 + C + shift from Feb | Feb | mk | F | 1049.76 | 1049.76 | 1049.76 | 1 | 1 | 2255 | 9000 | 0 | 0 |
| Report warranty and trade in with shift | B1 + B2 + C + shift from Feb | Feb | cr | S | 419.904 | 419.904 | 419.904 | 1 | 1 | 2255 | 9000 | 0 | 0 |
| Report warranty and trade in with shift | B1 + B2 + C + shift from Feb | Feb | cr | G | 524.88 | 524.88 | 524.88 | 1 | 1 | 2255 | 9000 | 0 | 0 |
| Report warranty and trade in with shift | B1 + B2 + C + shift from Feb | Feb | cr | F | 104.976 | 104.976 | 104.976 | 1 | 1 | 2255 | 9000 | 0 | 0 |
| Report warranty and trade in with shift | B1 + B2 + C + shift from Feb | Feb | st | S | 524.88 | 524.88 | 524.88 | 1 | 1 | 2255 | 9000 | 0 | 0 |
| Report warranty and trade in with shift | B1 + B2 + C + shift from Feb | Feb | st | G | 524.88 | 524.88 | 524.88 | 1 | 1 | 2255 | 9000 | 0 | 0 |
| Report warranty and trade in with shift | B1 + B2 + C + shift from Feb | Feb | st | F | 116.64 | 116.64 | 116.64 | 1 | 1 | 2255 | 9000 | 0 | 0 |
| Report warranty and trade in with shift | B1 + B2 + C + shift from Feb | Feb | rf | S | 285.768 | 285.768 | 285.768 | 1 | 1 | 2255 | 9000 | 0 | 0 |
| Report warranty and trade in with shift | B1 + B2 + C + shift from Feb | Feb | rf | G | 408.24 | 408.24 | 408.24 | 1 | 1 | 2255 | 9000 | 0 | 0 |
| Report warranty and trade in with shift | B1 + B2 + C + shift from Feb | Feb | rf | F | 122.472 | 122.472 | 122.472 | 1 | 1 | 2255 | 9000 | 0 | 0 |
| Report warranty and trade in with shift | B1 + B2 + C + shift from Feb | Feb | ti | S | 120 | 120 | 120 | 1 | 1 | 2255 | 9000 | 0 | 0 |
| Report warranty and trade in with shift | B1 + B2 + C + shift from Feb | Feb | ti | G | 150 | 150 | 150 | 1 | 1 | 2255 | 9000 | 0 | 0 |
| Report warranty and trade in with shift | B1 + B2 + C + shift from Feb | Feb | ti | F | 30 | 30 | 30 | 1 | 1 | 2255 | 9000 | 0 | 0 |
| Report warranty and trade in with shift | B1 + B2 + C + shift from Feb | Mar | ads | S | 606.528 | 606.528 | 606.528 | 1 | 1 | 2459 | 9000 | 0 | 0 |
| Report warranty and trade in with shift | B1 + B2 + C + shift from Feb | Mar | ads | G | 1213.056 | 1213.056 | 1213.056 | 1 | 1 | 2459 | 9000 | 0 | 0 |
| Report warranty and trade in with shift | B1 + B2 + C + shift from Feb | Mar | ads | F | 1213.056 | 1213.056 | 1213.056 | 1 | 1 | 2459 | 9000 | 0 | 0 |
| Report warranty and trade in with shift | B1 + B2 + C + shift from Feb | Mar | mk | S | 233.28 | 233.28 | 233.28 | 1 | 1 | 2459 | 9000 | 0 | 0 |
| Report warranty and trade in with shift | B1 + B2 + C + shift from Feb | Mar | mk | G | 1049.76 | 1049.76 | 1049.76 | 1 | 1 | 2459 | 9000 | 0 | 0 |
| Report warranty and trade in with shift | B1 + B2 + C + shift from Feb | Mar | mk | F | 1049.76 | 1049.76 | 1049.76 | 1 | 1 | 2459 | 9000 | 0 | 0 |
| Report warranty and trade in with shift | B1 + B2 + C + shift from Feb | Mar | cr | S | 419.904 | 419.904 | 419.904 | 1 | 1 | 2459 | 9000 | 0 | 0 |
| Report warranty and trade in with shift | B1 + B2 + C + shift from Feb | Mar | cr | G | 524.88 | 524.88 | 524.88 | 1 | 1 | 2459 | 9000 | 0 | 0 |
| Report warranty and trade in with shift | B1 + B2 + C + shift from Feb | Mar | cr | F | 104.976 | 104.976 | 104.976 | 1 | 1 | 2459 | 9000 | 0 | 0 |
| Report warranty and trade in with shift | B1 + B2 + C + shift from Feb | Mar | st | S | 524.88 | 524.88 | 524.88 | 1 | 1 | 2459 | 9000 | 0 | 0 |
| Report warranty and trade in with shift | B1 + B2 + C + shift from Feb | Mar | st | G | 524.88 | 524.88 | 524.88 | 1 | 1 | 2459 | 9000 | 0 | 0 |
| Report warranty and trade in with shift | B1 + B2 + C + shift from Feb | Mar | st | F | 116.64 | 116.64 | 116.64 | 1 | 1 | 2459 | 9000 | 0 | 0 |
| Report warranty and trade in with shift | B1 + B2 + C + shift from Feb | Mar | rf | S | 285.768 | 285.768 | 285.768 | 1 | 1 | 2459 | 9000 | 0 | 0 |
| Report warranty and trade in with shift | B1 + B2 + C + shift from Feb | Mar | rf | G | 408.24 | 408.24 | 408.24 | 1 | 1 | 2459 | 9000 | 0 | 0 |
| Report warranty and trade in with shift | B1 + B2 + C + shift from Feb | Mar | rf | F | 122.472 | 122.472 | 122.472 | 1 | 1 | 2459 | 9000 | 0 | 0 |
| Report warranty and trade in with shift | B1 + B2 + C + shift from Feb | Mar | ti | S | 216 | 216 | 216 | 1 | 1 | 2459 | 9000 | 0 | 0 |
| Report warranty and trade in with shift | B1 + B2 + C + shift from Feb | Mar | ti | G | 270 | 270 | 270 | 1 | 1 | 2459 | 9000 | 0 | 0 |
| Report warranty and trade in with shift | B1 + B2 + C + shift from Feb | Mar | ti | F | 54 | 54 | 54 | 1 | 1 | 2459 | 9000 | 0 | 0 |

## T23. Five conditionally feasible plans and Pareto comparison

Inputs: All 84 permitted plans. Tests: growth <=80 lakh, March EBITDA >=0, March returns <=6%, B1 proxy for claims controls.

Cell definitions: {"sort": "descending unrounded Q1 EBITDA; team objective", "pareto_efficient": "no other feasible plan has no higher growth money, no lower March/Q1 EBITDA, and no higher return rate, with at least one strict gain", "conditional_pass": "Exhibit 5 operating controls remain to be demonstrated"}

| plan | growth_money_lakh | march_ebitda_lakh | q1_ebitda_lakh | march_return_rate | march_delivered | tests | conditional_pass | dominated_by | pareto_efficient |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| B1 + B2 + shift from Feb | 58 | 5.60499808329 | -42.9269538334 | 0.0454960366285 | 8327.72 | {"t1": true, "t2": true, "t3": true, "t4": true} | True | [] | True |
| B1 + B2 + shift from Mar | 49 | 5.60499808329 | -57.1652937918 | 0.0454960366285 | 8327.72 | {"t1": true, "t2": true, "t3": true, "t4": true} | True | [] | True |
| B1 + C + shift from Feb | 68 | 1.8969548 | -69.0272644 | 0.0558545454545 | 8316 | {"t1": true, "t2": true, "t3": true, "t4": true} | True | ["B1 + B2 + shift from Feb", "B1 + B2 + shift from Mar"] | False |
| B1 + C + shift from Mar | 59 | 1.8969548 | -76.805932674 | 0.0558545454545 | 8316 | {"t1": true, "t2": true, "t3": true, "t4": true} | True | ["B1 + B2 + shift from Feb", "B1 + B2 + shift from Mar"] | False |
| B1 + B2 + C | 75 | 3.44490043113 | -86.7644225081 | 0.0447263798937 | 7200 | {"t1": true, "t2": true, "t3": true, "t4": true} | True | [] | True |

## T24. March EBITDA by combined order uplift and Good battery swap share

Inputs: {"combined_order_uplift": [0.08, 0.1051264298588438, 0.1664, 0.2], "good_battery_swap_share": [0.4, 0.5, 0.5506389481041294, 0.6], "options": ["B1", "B2"], "shift": true, "other_inputs": {"upA": 0.5, "upB1": 0.08, "upB2": 0.08, "upB3": 0.05, "rrB1": 0.3, "rrB2": 0.2, "gbat": 0.4, "fbat": 0.7, "kcl": 1.0, "rep": 120.0, "pB2": 0.04, "pA": 0.03, "tin_fail": 0.15, "tin_buy": 0.3, "tin_save": 0.08, "pickup": 400.0, "credit": 1000.0, "gbat_c": 1000.0, "fbat_c": 800.0}}

Cell definitions: {"row_axis": "combined order uplift, applied once as 1+u", "column_axis": "Good battery replacement share g, per delivered Good cost g*1000", "march_ebitda_lakh": "delivered contribution less 99 channel fixed, 58 company fixed and 9 shift; report/batteries/claims/returns/commission included", "break_even_rows": "exact uplift root holds Good swaps at 40%", "break_even_columns": "exact Good swap root holds uplift at 16.64%; their intersection need not be zero"}

| combined_order_uplift | good_swap_share | march_ebitda_lakh | delivered |
| --- | --- | --- | --- |
| 0.08 | 0.4 | -3.77421736 | 7776 |
| 0.08 | 0.5 | -7.21941736 | 7776 |
| 0.08 | 0.550638948104 | -8.96403040008 | 7776 |
| 0.08 | 0.6 | -10.66461736 | 7776 |
| 0.105126429859 | 0.4 | 2.84217094304e-14 | 7956.91029498 |
| 0.105126429859 | 0.5 | -3.52535331125 | 7956.91029498 |
| 0.105126429859 | 0.550638948104 | -5.31055514502 | 7956.91029498 |
| 0.105126429859 | 0.6 | -7.0507066225 | 7956.91029498 |
| 0.1664 | 0.4 | 5.60499808329 | 8327.72 |
| 0.1664 | 0.5 | 1.88418208329 | 8327.72 |
| 0.1664 | 0.550638948104 | 0 | 8327.72 |
| 0.1664 | 0.6 | -1.83663391671 | 8327.72 |
| 0.2 | 0.4 | 7.60149308169 | 8510 |
| 0.2 | 0.5 | 3.77349308169 | 8510 |
| 0.2 | 0.550638948104 | 1.83503414826 | 8510 |
| 0.2 | 0.6 | -0.0545069183098 | 8510 |

## T25. Third shift timing and Q1 consequences

Inputs: B1+B2 setups 40 lakh in January; shift 9 lakh each active month; January unchanged.

Cell definitions: {"q1_delta_vs_feb_shift_lakh": "alternative Q1 EBITDA minus February shift Q1 EBITDA", "conditional_pass": "all four numerical screen fields, with claims proxy conditional"}

| plan | growth_money_lakh | march_ebitda_lakh | q1_ebitda_lakh | march_return_rate | march_delivered | tests | conditional_pass | january_ebitda_lakh | february_ebitda_lakh | february_delivered | february_growth_lakh | march_growth_lakh | q1_delta_vs_feb_shift_lakh |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| B1 + B2 + shift from Feb | 58 | 5.60499808329 | -42.9269538334 | 0.0454960366285 | 8327.72 | {"t1": true, "t2": true, "t3": true, "t4": true} | True | -54.13695 | 5.60499808329 | 8327.72 | 9 | 9 | 0 |
| B1 + B2 + shift from Mar | 49 | 5.60499808329 | -57.1652937918 | 0.0454960366285 | 8327.72 | {"t1": true, "t2": true, "t3": true, "t4": true} | True | -54.13695 | -8.63334187512 | 7200 | 0 | 9 | -14.2383399584 |
| B1 + B2 | 40 | -8.63334187512 | -71.4036337502 | 0.0454960366285 | 7200 | {"t1": true, "t2": false, "t3": true, "t4": true} | False | -54.13695 | -8.63334187512 | 7200 | 0 | 0 | -28.4766799168 |

## T26. Segment ranking sensitivity to stated judgement weights

Inputs: {"criteria": ["Size", "Contribution per phone", "Q1 room to grow", "Grade return risk", "Worry addressed by B1+B2", "Board-feasible lever reach"], "scores": {"Flagship on a budget": [5, 5, 1, 5, 3, 3], "Value seekers": [4, 1, 5, 1, 1, 1], "Family buyers": [3, 3, 5, 3, 5, 5], "Upgraders": [2, 4, 3, 4, 2, 1]}, "basis": "Inherited T10 team judgement, 1 weak to 5 strong. Size order follows E1C; contribution and capacity follow E2/E4/E6. No measured segment-specific demand elasticity is available."}

Cell definitions: {"weighted_total": "sum(score_i * weight_i)", "weighted_mean": "weighted_total / sum(weights)", "rank": "1 + number of strictly larger totals; ties share rank"}

| scheme | segment | scores | weights | weighted_total | weighted_mean | rank |
| --- | --- | --- | --- | --- | --- | --- |
| Equal | Flagship on a budget | [5, 5, 1, 5, 3, 3] | [1, 1, 1, 1, 1, 1] | 22 | 3.66666666667 | 2 |
| Equal | Value seekers | [4, 1, 5, 1, 1, 1] | [1, 1, 1, 1, 1, 1] | 13 | 2.16666666667 | 4 |
| Equal | Family buyers | [3, 3, 5, 3, 5, 5] | [1, 1, 1, 1, 1, 1] | 24 | 4 | 1 |
| Equal | Upgraders | [2, 4, 3, 4, 2, 1] | [1, 1, 1, 1, 1, 1] | 16 | 2.66666666667 | 3 |
| Double size | Flagship on a budget | [5, 5, 1, 5, 3, 3] | [2, 1, 1, 1, 1, 1] | 27 | 3.85714285714 | 1 |
| Double size | Value seekers | [4, 1, 5, 1, 1, 1] | [2, 1, 1, 1, 1, 1] | 17 | 2.42857142857 | 4 |
| Double size | Family buyers | [3, 3, 5, 3, 5, 5] | [2, 1, 1, 1, 1, 1] | 27 | 3.85714285714 | 1 |
| Double size | Upgraders | [2, 4, 3, 4, 2, 1] | [2, 1, 1, 1, 1, 1] | 18 | 2.57142857143 | 3 |
| Double margin | Flagship on a budget | [5, 5, 1, 5, 3, 3] | [1, 2, 1, 1, 1, 1] | 27 | 3.85714285714 | 1 |
| Double margin | Value seekers | [4, 1, 5, 1, 1, 1] | [1, 2, 1, 1, 1, 1] | 14 | 2 | 4 |
| Double margin | Family buyers | [3, 3, 5, 3, 5, 5] | [1, 2, 1, 1, 1, 1] | 27 | 3.85714285714 | 1 |
| Double margin | Upgraders | [2, 4, 3, 4, 2, 1] | [1, 2, 1, 1, 1, 1] | 20 | 2.85714285714 | 3 |

## T27. Proposed weekly operating definitions and response levels

Inputs: {"weeks_per_month": 4.33, "model_boundary_order_uplift": 0.1051264298588438, "good_swap_break_even": 0.5506389481041294, "return_warning": 0.055, "return_board_limit": 0.06, "good_swap_warning": 0.5}

Cell definitions: {"status": "All owners, cohort conventions, warning periods and actions are proposed management rules, not observed performance. Monthly board tests remain authoritative.", "warning_vs_boundary": "50% Good swaps is a warning; the model boundary is about 55%. Return 6% is a board boundary and is not an EBITDA zero point."}

| metric | definition | owner | planned | warning | boundary | boundary_type | unit | proposed_action |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Delivered orders | All-channel delivered phones in the completed week; monthly comparison divided by 4.33. | Growth lead and operations lead | 1923.26096998 | 1837.62362471 | 1837.62362471 | March EBITDA zero at base mix and costs | phones/week | If below this level for two completed weeks, diagnose channel demand and delivery loss; preserve claims controls and retest the full-month forecast. |
| Completed seven-day cohort return rate | Phones returned within seven days divided by phones delivered in the same fully matured sales cohort, aggregated across channels. Exclude immature cohorts. | Customer service lead | 0.0454960366285 | 0.055 | 0.06 | March board test limit; not EBITDA zero | fraction | At 5.5%, inspect grade/channel cohorts and pause misleading creative; at 6%, escalate to CEO and correct the operating cause. |
| Good battery replacement share | Good phones requiring replacement divided by Good phones tested in the same relevant batch. Keep batch counts and tracker version. | Lab lead | 0.4 | 0.5 | 0.550638948104 | March EBITDA zero holding all other base inputs | fraction | At 50%, audit supplier lots and tester calibration; near 55.06%, rerun sourcing and margin economics before accepting further lots. |

## T28. April trade-in ramp, setup payment and recovery

Inputs: {"setup_lakh": 35.0, "tradein_ramp": [1000, 1800, 2600, 3400, 4000], "assumption": "A15: new next-quarter growth funding; April launch restarts the case ramp at 1000. Keep B1+B2 and February third shift running. No second B1/B2 setup charge. Months after August held at 4000."}

Cell definitions: {"ongoing_ebitda_lakh": "contribution after marketing minus 58 company fixed minus 9 shift, before C setup", "incremental_ongoing_ebitda_lakh": "ongoing EBITDA minus keep-plan ongoing EBITDA", "setup_cash_lakh": "35 in April, zero thereafter; under case convention also deduct from April EBITDA", "month_ebitda_after_setup_lakh": "ongoing EBITDA minus setup in that month", "cumulative_incremental_benefit_after_setup_lakh": "sum incremental ongoing EBITDA since April minus one-off 35", "payback": "first cumulative nonnegative month; fractional estimate assumes within-month incremental benefit accrues evenly, not a promised cash-flow forecast"}

Payback: {"month_index": 2, "month": "May", "fraction_of_month": 0.7489408766967244, "elapsed_months": 1.7489408766967243}

Payback-method correction: Inherited 2.2 months holds first-month incremental benefit constant. Ramp-aware cumulative incremental recovery occurs during May, interpolated about 1.75 months. Never divide setup by total company EBITDA.

| month | tradeins | passed_tradeins | incremental_buyer_demand | incremental_buyer_delivered | delivered | demand | sourcing_savings_lakh | pickup_cost_lakh | buyer_credit_lakh | ongoing_ebitda_lakh | keep_plan_ebitda_lakh | incremental_ongoing_ebitda_lakh | setup_cash_lakh | month_ebitda_after_setup_lakh | month_incremental_after_setup_lakh | cumulative_incremental_benefit_after_setup_lakh | return_rate |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| April | 1000 | 850 | 300 | 300 | 8698.08 | 8698.08 | 8.5272 | 4 | 3 | 21.4290092512 | 5.60499808329 | 15.8240111679 | 35 | -13.5709907488 | -19.1759888321 | -19.1759888321 | 0.0449715755201 |
| May | 1800 | 1530 | 540 | 540 | 8938.08 | 8938.08 | 15.34896 | 7.2 | 5.4 | 31.2091404512 | 5.60499808329 | 25.6041423679 | 0 | 31.2091404512 | 25.6041423679 | 6.42815353582 | 0.0447263798937 |
| June | 2600 | 2210 | 780 | 764.865854296 | 9000 | 9178.08 | 22.17072 | 10.4 | 7.64865854296 | 37.201494722 | 5.60499808329 | 31.5964966387 | 0 | 37.201494722 | 31.5964966387 | 38.0246501746 | 0.0444940076356 |
| July | 3400 | 2890 | 1020 | 974.720962234 | 9000 | 9418.08 | 28.99248 | 13.6 | 9.74720962234 | 41.8300368758 | 5.60499808329 | 36.2250387925 | 0 | 41.8300368758 | 36.2250387925 | 74.2496889671 | 0.044273478416 |
| August | 4000 | 3400 | 1200 | 1125.22504501 | 9000 | 9598.08 | 34.1088 | 16 | 11.2522504501 | 45.2684018434 | 5.60499808329 | 39.6634037601 | 0 | 45.2684018434 | 39.6634037601 | 113.913092727 | 0.0441153190638 |
| September | 4000 | 3400 | 1200 | 1125.22504501 | 9000 | 9598.08 | 34.1088 | 16 | 11.2522504501 | 45.2684018434 | 5.60499808329 | 39.6634037601 | 0 | 45.2684018434 | 39.6634037601 | 153.576496487 | 0.0441153190638 |
| October | 4000 | 3400 | 1200 | 1125.22504501 | 9000 | 9598.08 | 34.1088 | 16 | 11.2522504501 | 45.2684018434 | 5.60499808329 | 39.6634037601 | 0 | 45.2684018434 | 39.6634037601 | 193.239900247 | 0.0441153190638 |
| November | 4000 | 3400 | 1200 | 1125.22504501 | 9000 | 9598.08 | 34.1088 | 16 | 11.2522504501 | 45.2684018434 | 5.60499808329 | 39.6634037601 | 0 | 45.2684018434 | 39.6634037601 | 232.903304007 | 0.0441153190638 |

## T29. Material assumption alternatives and consequences

Inputs: All alternatives hold remaining exhibit inputs fixed. Rejected readings diagnose model errors and are not permitted Q1 strategies.

Cell definitions: {"q1_delta_vs_canonical_same_plan_lakh": "alternative calculation minus canonical same levers/shift result", "April scope": "post-Q1, requires fresh funding and explicit ramp assumption", "compliance": "B1 screen is conditional; removing the proxy cannot demonstrate compliance or price missing controls"}

| reading | scope | plan | march_ebitda_lakh | q1_ebitda_lakh | q1_delta_vs_canonical_same_plan_lakh | march_return_rate | growth_money_lakh | tests | basis | interpretation | tradeins | ongoing_ebitda_lakh | after_setup_lakh | incremental_ongoing_vs_keep_lakh | sample_fail_share | extrapolated_monthly_below_claim | incremental_q1_ebitda_lakh | monthly_from_annual_lakh | exhibit_monthly_lakh | monthly_difference_lakh | q1_difference_if_repeated_lakh |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Canonical multiplicative effects | Jan to Mar | B1 + B2 + shift from Feb | 5.60499808329 | -42.9269538334 | 0 | 0.0454960366285 | 58 | {"t1": true, "t2": true, "t3": true, "t4": true} | C-E6H2 explicitly says multiply order and return effects. | Retain |  |  |  |  |  |  |  |  |  |  |  |
| Only passed trade-in participants buy | Jan to Mar | B1 + B2 + C + shift from Feb | 29.1306901712 | -39.7319451776 | -3.23314488 | 0.0448076478478 | 93 | {"t1": false, "t2": true, "t3": true, "t4": true} | A07: 30% of people who trade in is read as all participants. Alternative restricts to passed phones. | Disclose sensitivity; case wording supports canonical all-participant reading |  |  |  |  |  |  |  |  |  |  |  |
| All trade-in failures concentrated in Superb | Jan to Mar | B1 + B2 + C + shift from Feb | 29.2456908064 | -41.1442220989 | -4.64542180133 | 0.0447682633527 | 93 | {"t1": false, "t2": true, "t3": true, "t4": true} | A06 assumes the 15% failure rate is proportional across grades. This alternative puts all failed units in Superb, leaving total passed units unchanged. | Sensitivity only: grade-level failure rates are absent from the case |  |  |  |  |  |  |  |  |  |  |  |
| All trade-in failures concentrated in Fair | Jan to Mar | B1 + B2 + C + shift from Feb | 32.4057804512 | -34.6373602976 | 1.86144 | 0.0447263798937 | 93 | {"t1": false, "t2": true, "t3": true, "t4": true} | A06 alternative puts all failed units in Fair; total passed units remain 85%. | Sensitivity only: neither concentration is evidenced |  |  |  |  |  |  |  |  |  |  |  |
| Add B1 and B2 return reductions | Jan to Mar | B1 + B2 + shift from Feb | 6.33569185915 | -41.4655662817 | 1.46138755173 | 0.0406214612755 | 58 | {"t1": true, "t2": true, "t3": true, "t4": true} | Would retain 50% of former rates, rather than 56%. | Reject: C-E6H2 requires multiplication |  |  |  |  |  |  |  |  |  |  |  |
| MegaKart commission retains original prices | Jan to Mar | B1 + B2 + shift from Feb | 6.67081939709 | -40.7953112058 | 2.13164262761 | 0.0454960366285 | 58 | {"t1": true, "t2": true, "t3": true, "t4": true} | Would fail to raise commission on Superb and Good when B2 price rises. | Reject: C-E3N2 commission is 12% of selling price |  |  |  |  |  |  |  |  |  |  |  |
| Savings paid on failed trade-ins too | Jan to Mar | B1 + B2 + C + shift from Feb | 33.9177804512 | -32.2853602976 | 4.21344 | 0.0447263798937 | 93 | {"t1": false, "t2": true, "t3": true, "t4": true} | A20 charges savings only on passed phones; failed phones recover acquisition cost as parts. | Reject: C-E6TI3 limits savings to phones that pass |  |  |  |  |  |  |  |  |  |  |  |
| Pickup charged on passed phones only | Jan to Mar | B1 + B2 + C + shift from Feb | 32.2891404512 | -34.8188002976 | 1.68 | 0.0447263798937 | 93 | {"t1": false, "t2": true, "t3": true, "t4": true} | A failed trade-in still had a pickup. | Reject: C-E6TI2 charges every pickup |  |  |  |  |  |  |  |  |  |  |  |
| Restart April ramp | April only |  |  |  |  |  |  |  | A15. If C was deferred in Q1, restarting at 1000 is the stated team assumption. A continued calendar ramp at 2600 is an alternative, not case-confirmed. | Scenario comparison; secure new funding before either | 1000 | 21.4290092512 | -13.5709907488 | 15.8240111679 |  |  |  |  |  |  |  |
| Continue original calendar ramp | April only |  |  |  |  |  |  |  | A15. If C was deferred in Q1, restarting at 1000 is the stated team assumption. A continued calendar ramp at 2600 is an alternative, not case-confirmed. | Scenario comparison; secure new funding before either | 2600 | 37.201494722 | 2.20149472203 | 31.5964966387 |  |  |  |  |  |  |  |
| Good battery sample extrapolation | diagnostic only |  |  |  |  |  |  |  | A14 extrapolates a sample to show indicative scale; no downgrade/scrap rate or remediation cost was specified. | Keep qualitative limitation; do not charge an invented Q1 loss |  |  |  |  | 0.11 | 350.9 | 0 |  |  |  |  |
| Use annual rounded EBITDA as monthly baseline | historical reconciliation only |  |  |  |  |  |  |  | LTM and Exhibit 3 averages cover different/rounded historical scopes. | Reject replacement: preserve case facts and use exhibit-built monthly model |  |  |  |  |  |  |  | -14.1666666667 | -14.13695 | -0.0297166666667 | -0.08915 |

## Checks

- PASS: T22 both months all selected plans complete
- PASS: T22 each channel-grade demand reconciles
- PASS: T23 contains five conditionally feasible plans
- PASS: T24 contains 16 distinct intersections
- PASS: T24 combined uplift applied once
- PASS: T24 exact single-input boundaries return zero
- PASS: T25 March and no shift comparison complete
- PASS: T26 family ranks first all stated weights
- PASS: T27 weekly figures independently reconcile
- PASS: T27 warns separately from failure boundaries
- PASS: T28 setup charged exactly once
- PASS: T28 cumulative recovery and April EBITDA separate
- PASS: T29 alternative calculations remain scoped
