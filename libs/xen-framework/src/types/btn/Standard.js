	var types.btn.standard = {
		states: {
			normal: {
				label: "E1"
			},
			rollOver: {
				label: "E2",
				noiseCode: "",
				ibId: ""
			},
			rollOut: {
				label: "E1"
			},
			click: {
				label: "E1"
			}
		}

		var types.btn.standard = function( params ) {
			return new xen.Clip( params )
		}


		var bloc = initBloc( {
			type: "BTN",
			config: {},
			events: {
				click: [
					{
						action: "parent.GoLabel",
						label: "_02"
					},
					{
						action: "GoLabel",
						label: "E3"
					}
				],
				roll: [
					{
						action: "GoLabel",
						label: "E2"
					},
					{
						action: "PlayNoise",
						code: "B_ROLL"
					}
				]
			}
		} )

			function initBloc( params ) {

				// type

				// clip

				// config

			}